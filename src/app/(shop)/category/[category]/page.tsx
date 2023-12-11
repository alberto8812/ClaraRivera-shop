import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductCardHome, Title } from "@/components";

interface Props{
  params:{
    category:string;
    
  }
}



export default async function ({params}:Props) {
  const [category,subcategory]=params.category.split('_');
  const Categorydecode=decodeURIComponent(category)
  const subcategorydecode=decodeURIComponent(subcategory)




  const params2={
    category,
    subcategory,
  }
  
   const getProductCategory= await getPaginatedProductsWithImages(params2);



  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" w-full pl-4">
         <Title title={Categorydecode} subtitle={subcategorydecode}/>
      </div>
      <div className=' grid grid-cols-1 sm:grid-cols-3  justify-evenly   p-5   gap-4 items-center '>
          {
            
            getProductCategory?.products.map(product=>(
              <ProductCardHome product={product} key={product.slug}/>
            ))
          
            }

        
      </div>

            <Pagination totalPages={2}/>
    </div>
  );
}