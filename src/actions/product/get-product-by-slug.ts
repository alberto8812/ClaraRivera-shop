'use server'

import prisma from "@/lib/prisma"



export const getProductBySlug=async(slug:string)=>{



    try {
      const product= await prisma.product.findUnique({
        include:{
            productImage:{
                select:{
                    url:true,
                }
            }
        },
        where:{
            slug
        }
      })

      if(!product) return null;

    return {
        ...product,
        images:product.productImage.map(image=>image.url)
    };
        
    } catch (error) {
        throw new Error(' Error al obtner producto por slug')
    }
}