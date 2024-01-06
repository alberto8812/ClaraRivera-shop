"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import type { Address, Size } from "@/components/interfaces";
import prisma from "@/lib/prisma";

interface ProductToOrder {
  productId: string;
  quantity: number;
  size: Size | undefined;
}

export const placeOrder = async (
  productIds: ProductToOrder[],
  addrress: Address
) => {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    if (!userId) {
      return {
        ok: false,
        message: "no hay sesion de usuario",
      };
    }

    const products = await prisma.product.findMany({
      where: {
        id: {
          in: productIds.map((product) => product.productId),
        },
      },
    });

    //calcular los montos

    const itemsInorder = productIds.reduce((count, p) => count + p.quantity, 0);

    const { subTotal, tax, total } = productIds.reduce(
      (totals, item) => {
        const productQueantity = item.quantity;
        const product = products.find(
          (product) => product.id === item.productId
        );

        if (!product) throw new Error(`${item.productId} no existe-500`);

        const subTotal=product.price * productQueantity;

        totals.subTotal += subTotal;
        totals.tax += subTotal * 0.15;
        totals.total += subTotal * 1.15;

        return totals;
      },
      { subTotal: 0, tax: 0, total: 0 }
    );

    //crear transaccion
    const prismaTx =await prisma.$transaction(async (tx) => {
      //1. actualizar el stock de los productos


      const updateProductPromises=products.map(async (product)=>{
        //acumular los valores
        const productQuantity=productIds.filter(
          p=>p.productId===product.id
        ).reduce((acs,item)=>item.quantity+acs,0);

        if(productQuantity===0) throw new Error(`${product.id} no tiene  cantidad definida`);


        return tx.product.update({
          where:{id:product.id},
          data:{
            inStock:{
              decrement:productQuantity
            }
          }
        })
      });

      const updateProducts=await Promise.all(updateProductPromises);

      //verificar valores negativos no stock

      updateProducts.forEach(product=>{
        if(product.inStock<0){
          throw new Error(`${product.title} no tiene inventario suficiente`)
        }
      })




      //2. crear la orden header

      const order = await tx.order.create({
        data: {
          userId: userId,
          itemsInorder: itemsInorder,
          subTotal: subTotal,
          tax: tax,
          total: total,

          OrderItem: {
            createMany: {
              data: productIds.map((p) => ({
                quantity: p.quantity,
                size: p.size === undefined ? "NA" : p.size,
                ProductId: p.productId,
                price:
                  products.find((product) => product.id === p.productId)
                    ?.price ?? 0,
              })),
            },
          },
        },
      });

      //validar si el price es cero  , lanzar un error 

      //3. crear la direccion de la orden
      const {country,...restAddress}=addrress;
      console.log(restAddress)
      const orderAddress= await tx.orderAddress.create({
        data:{
          firstName:restAddress.firstName,
          lastName:restAddress.lastName,
          address:restAddress.address,
          optionalAddres:restAddress.optionalAddres,
          postalCode:restAddress.postalCode,
          city:restAddress.city,
          phone:restAddress.phone,
          countryId:country,
          orderId:order.id
        }
      })
      return {
        order: order,
        updateProduct: updateProducts,
        orderAddress: orderAddress,
      }; 
    });

    return{
      ok:true,
      order:prismaTx.order,
      prismaTx:prismaTx,
    }

  } catch (error:any) {
    console.log(error);
    return {
      ok: false,
      message: error?.message,
    };
  }
};
