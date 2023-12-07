import { titleFont } from "@/app/config/fonts";
import { ProductMobileSlideshow, ProductSlideshow, SizeSelector } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { IoAddCircleOutline, IoHeart } from "react-icons/io5";


interface Props{
  params:{
    slug:string
  }
}


export default function ({params}:Props) {
  const {slug}=params;
  const product=initialData.products.find(product=>product.slug===slug);
  
  
  if(!product){
    notFound();
  }



  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3 ">

    <div className="col-span-1 md:col-span-2 ">
            {/* slideshow mobile */}
      <ProductMobileSlideshow 
       images={product.images} 
       title={product.title}
       className="block md:hidden"
       />
     {/* slideshow escritorio */}
       <ProductSlideshow 
       images={product.images} 
       title={product.title}
       className="hidden md:grid"
       />
      
    </div>
     {/* detalles */}
     <div className="col-span-1 px-5 pt-16 ">
     <h1 className={`${titleFont.className} antialiased font-bold text-4xl`}>
          {product.title}
     </h1>
     <div className="flex items-center pt-5">
                <IoHeart size={30} className="text-gray-400"  />
                  <span className="mr-2 ml-3 rounded bg-gray-200 px-2.5 py-0.5 text-xs  font-bold">5.0</span>
                </div>
                <div className="flex justify-between items-center w-full">
      </div>
      
      <p className="text-3xl mb-5 pt-5 font-bold">
          ${product.price} COP
      </p>

       {/* descripcion */}
       <h3 className="font-bold text-2xl">Descripcion</h3>
        <p className="text-1xl">
          {
            product?.description
          }
        </p>

              {/* selecto de tallas */}
        <SizeSelector 
          selecdSize={product.sizes[0]}
          availableSizes={product.sizes}
          />


        <div className=" flex  pt-4">
        <IoAddCircleOutline size={30} className="text-red-400" />
        <h3 className="font-bold text-2xl text-red-400 ml-3">Añadir a tus favoritos</h3>
        </div>

        {/* button */}
       <button 
        className="btn-primary my-5"
        >
          Agregar al carrito
        </button>



     </div>
    </div>
  );
}