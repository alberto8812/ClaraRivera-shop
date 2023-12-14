import { initialData } from './seed';
import prisma from '../lib/prisma';

async function main() {

  

    //1.borrar registros previos
        await prisma.user.deleteMany();
        await prisma.productImage.deleteMany();
        await prisma.product.deleteMany();
        await prisma.category.deleteMany();
        await prisma.subCategory.deleteMany();


    const {categories,subCategories,products,seedUser}=initialData;


    const categoriesData2=categories.map(category=>({
        name:category
    }))

    const subCategoriesData2=subCategories.map(subCategory=>({
        name:subCategory
    }))

   //SUBCATEGORI
    await prisma.subCategory.createMany({
       data:subCategoriesData2
    })
        //categorias
     await prisma.category.createMany({
        data:categoriesData2
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

     await prisma.user.createMany({
        data:seedUser
    })


    //      //borrar//
    //      let clothessubcategory=subCategories.filter(subcat=> subcat!='computadores' && subcat!='smartwatch' && subcat!='videojuegos' );
    //      let clothescategory=categories.filter(subcat=> subcat!='tecnología' && subcat!='otros' && subcat!='hogar'  && subcat!='Belleza y salud'  && subcat!='mascotas');
    
    
    //      const categoriesData=clothescategory.map(category=>({
    //         name:category
    //     }))
    
    //     const subCategoriesData=clothessubcategory.map(subCategory=>({
    //         name:subCategory
    //     }))
    
    
    //     //ensayo
    
    //     categoriesData.forEach(async(categorie) => {
    //         subCategoriesData.forEach(async(subcategorie) => {
    //             console.log(subcategorie.name,categorie.name)
    //             await prisma.subCategory.update({
    //                 where:{id:subcategoriesMap[subcategorie.name]},
                    
    //             data:{
    //                 category:{
    //                     set:[{id:categoriesMap[categorie.name]},{id:subcategoriesMap[subcategorie.name]}],
    //                 }
                
    //             }
    //         })
    //     })
    // })






    console.log("seed ejecutado")
    
}




(()=>{
    console.log("paso 1")
    if(process.env.NODE_ENV === 'production') return
    main();

})();