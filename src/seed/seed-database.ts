import { initialData } from './seed';
import prisma from '../lib/prisma';

async function main() {

  

    //1.borrar registros previos
    await Promise.all([
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
         prisma.subCategory.deleteMany(),
    ])
  
    //categorias
    const {categories,subCategories,products}=initialData;
    const categoriesData=categories.map(category=>({
        name:category
    }))
     await prisma.category.createMany({
        data:categoriesData
     })

    //SUBCATEGORI
    const subCategoriesData=subCategories.map(subCategory=>({
        name:subCategory
    }))
     await prisma.subCategory.createMany({
        data:subCategoriesData
     })

     const categoryDB= await prisma.category.findMany();

     const categoriesMap=categoryDB.reduce((map,category)=>{
        map[category.name.toLocaleLowerCase()]=category.id
        return map

     },{} as Record<string,string>)

     const subcategoryDB= await prisma.subCategory.findMany();

     const subcategoriesMap=subcategoryDB.reduce((map,category)=>{
        map[category.name.toLocaleLowerCase()]=category.id
        return map

     },{} as Record<string,string>)


     products.forEach(async(product) => {

        const {type,images,...rest}=product;

        const dbproduct=await prisma.product.create({
            data:{
                ...rest,
                categoryId:categoriesMap[rest.gender],
                subcategoryId:subcategoriesMap[type]
            }
        })
        
        //images
          
        const imagesData=images.map(image=>({
            url:image,
            ProductId:dbproduct.id

        }))

        await prisma.productImage.createMany({
            data:imagesData
        })

     });


    console.log("seed ejecutado")
    
}




(()=>{
    console.log("paso 1")
    if(process.env.NODE_ENV === 'production') return
    main();

})();