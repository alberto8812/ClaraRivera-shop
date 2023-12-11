'use server';
import prisma from "@/lib/prisma";




export const getStockBySlug= async(slug:string)=>{


    try {
        
        const procutStock= await prisma.product.findUnique({
            select:{
                 inStock:true
             },
            where:{
                slug,
            }
        })
    

    return procutStock?.inStock??0;


    } catch (error) {
        throw new Error('problemas en el stock')
        
    }
}