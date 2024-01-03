'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import type { Address, Size } from "@/components/interfaces";
import prisma from "@/lib/prisma";

interface ProductToOrder {
    productId:string;
    quantity:number;
    size:Size | undefined;
}

export const placeOrder=async(productIds:ProductToOrder[],addrress:Address)=>{

    try {
        const session=await getServerSession(authOptions);
        const userId=session?.user?.id
        if(!userId){
            return {
                ok:false,
                message:'no ha sesion de usuario'
            }
        }
       
        const products= await prisma.product.findMany({
            where:{
                id:{
                    in:productIds.map(product=>product.productId)
                }
            }
        });
        
        //calcular los montos

        const itemsInorder=productIds.reduce((count,p)=>count + p.quantity,0)
        
    } catch (error) {
        console.log(error)
        return {
            ok:false,
            message:''
        }
    }
};