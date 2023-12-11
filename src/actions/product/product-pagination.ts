'use server'

import prisma from "@/lib/prisma";


interface Pagination {
    page?:number;
    take?:number;
    category?:string,
    subcategory?:string
}


export const getPaginatedProductsWithImages= async({page=1,take=12,category='',subcategory=''}:Pagination)=>{

    const categoryParams=decodeURIComponent(category);
    const subcategoryParams=decodeURIComponent(subcategory);




    if(isNaN(Number(page)) || page<1 )page=1;
 
    if(isNaN(Number(take))  || page<12)page=12;

    try {
    //    1.obtener los productos 
        const products=await prisma.product.findMany({
            // take: take,
            // skip:(page-1)*take,
            include:{
                productImage:{
                    take:2,
                    select:{
                        url:true
                    }
                }
                
            },

            where:{
                category:{
                    name:categoryParams
                },
                subcategory:{
                    name:subcategoryParams
                }
            }
  
        })



        //2.obtener el toalta de paginas
        //todo
        const totalCount= await prisma.product.count({})
        const toltalPage=Math.ceil(totalCount/take)


        return{
        currentPage:page,
        toltalPage,
        products:products.map(product=>({
            ...product,
            images:product.productImage.map(image=>image.url)
        }))
        }
    } catch (error) {
        
    }
}