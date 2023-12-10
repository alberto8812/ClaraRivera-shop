'use server'

import prisma from "@/lib/prisma";

export const getHomeProductsWithImages= async()=>{
    try {
        const productsdb=await prisma.category.findMany({
            include:{
                Product:{
                    take:3,
                    select:{
                        id:true,
                        title:true,
                        description:true,
                        price:true,
                        slug:true,
                        score:true,
                        sizes:true,
                        inStock:true,
                        tags:true,
                        gender:true,
                        productImage:{
                            take:2,
                            select:{
                                url:true
                            }
                        }
                    },      
                }
            }
        })
        const products=productsdb.map(item=>({
            name:item.name,
            product:item.Product.map(product=>({
                ...product,
                images:product.productImage.map(image=>image.url)
            }))
        }
        ))
       
        return products;
    } catch (error) {
        
    }
}