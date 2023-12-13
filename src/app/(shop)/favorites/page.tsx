import { Title } from "@/components"



export default function Favorites() {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col w-[1000px]">
          <Title
          title="Favoritos"
          />
        </div>
        {/* {
              category.product?.map(product=>(
                
                  
                      <ProductCardHome product={product} key={product.slug}/>
                   
                   ))
         } */}
    </div>
  )
}
