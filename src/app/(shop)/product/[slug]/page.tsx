export const revalidate=604800;//7valida el producto en 7 dias

import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

import { getProductBySlug } from "@/actions";
import { titleFont } from "@/app/config/fonts";
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector, StokcLabel } from "@/components";

import { IoAddCircleOutline, IoHeart } from "react-icons/io5";


interface Props{
  params:{
    slug:string
  }
}


export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  const product=await getProductBySlug(slug)


  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: product?.title ?? "Producto no encontrados",
    description:product?.description ?? '',
    openGraph: {
      title: product?.title ?? "Producto no encontrados",
      description:product?.description ?? "",
      images: [`/products/${product?.images}`],
    },
  }
}





export default  async function ProductPage({params}:Props) {

   const {slug}=params;
   const getProduct= await getProductBySlug(slug);


  if(!getProduct){
    notFound();
  }



  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3  ">

    <div className="col-span-1 md:col-span-2  ">
            {/* slideshow mobile */}
      <ProductMobileSlideshow
       images={getProduct.images}
       title={getProduct.title}
       className="block md:hidden"
       />
     {/* slideshow escritorio */}
       <ProductSlideshow
       images={getProduct.images}
       title={getProduct.title}
       className="hidden md:grid"
       />

    </div>
     {/* detalles */}
     <div className="col-span-1 px-5 pt-16  md:grid-cols-2">

     <StokcLabel slug={getProduct.slug}/>

     <h1 className={`${titleFont.className} antialiased font-bold text-4xl`}>
          {getProduct.title}
     </h1>
     <div className="flex items-center pt-5">
                <IoHeart size={30} className="text-gray-400"  />
                  <span className="mr-2 ml-3 rounded bg-gray-200 px-2.5 py-0.5 text-xs  font-bold">5.0</span>
                </div>
                <div className="flex justify-between items-center w-full">
      </div>

      <p className="text-3xl mb-5 pt-5 font-bold">
          ${getProduct.price} COP
      </p>

       {/* descripcion */}
       <h3 className="font-bold text-2xl">Descripcion</h3>
        <p className="text-1xl">
          {
            getProduct.description
          }
        </p>

              {/* selecto de tallas */}
          {
          getProduct.sizes.length >1 &&
          (<SizeSelector
            selecdSize={getProduct.sizes[0]}
            availableSizes={getProduct.sizes}
            />)
          }
        <div className=" flex  pt-4 pb-4">
          <QuantitySelector quantity={3}/>
        </div>

        <div className=" flex  pt-4 pb-4">
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