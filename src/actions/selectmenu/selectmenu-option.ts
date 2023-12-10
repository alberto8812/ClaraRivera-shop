'use server'

import prisma from "@/lib/prisma"

export const getCategoryAndSubcategory=async()=>{
    try {

       const getcategories= await prisma.category.findMany({
            select:{
                name:true,
                id:true,
                subCategory:{
                    select:{
                        name:true,
                        id:true
                    }
                }

            }

          })
        
          return getcategories;
        
    } catch (error) {
        throw ("FALLO")
    }
}