'use server';

import prisma from "@/lib/prisma";

export const getPaginatedProductsWithImages= async()=>{
    try {
        const products=await prisma.product.findMany({
            include:{
                productImage:{
                    take:2,
                    select:{
                        url:true
                    }
                }
            }
        })
        console.log(products)
    } catch (error) {
        
    }
}