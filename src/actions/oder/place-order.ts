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

        totals.subTotal += subTotal;
        totals.tax += subTotal * 0.15;
        totals.total += subTotal * 1.15;

        return totals;
      },
      { subTotal: 0, tax: 0, total: 0 }
    );
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "",
    };
  }
};
