'use client'


import { QuantitySelector, SizeSelector } from "@/components"
import type{ CartProduct, Product, Size } from "@/components/interfaces"
import { useCartStore } from "@/store"
import { useState } from "react"
import { IoAddCircleOutline } from "react-icons/io5"

interface Props{
    product:Product
}



export const AddToCart = ({product}:Props) => {
    const {sizes}                 = product;
    const addProductToCart        = useCartStore(state=>state.addProductToCard);
    const [size, setSize]         = useState<Size | undefined>();
    const [Quantity, setQuantity] = useState(1);
    const [posted, setPosted]     = useState(false);
  //  sizes[0]==='NA' &&  setSize('NA');

    const addTocart=()=>{
        setPosted(true);

        if(sizes.length>0 && !size && sizes[0]!=='NA') return;
         
        const cartProduct:CartProduct={
          id: product.id,
          slug: product.slug,
          title: product.title,
          price: product.price,
          quantity: Quantity,
          size:sizes[0]!=='NA'?'NA':size,
          image: product.images[0]
        }
  
        addProductToCart(cartProduct);
        setPosted(false);
        setQuantity(1);
        setSize(undefined);



    }



  return (
    <>

           {
            posted && !size && sizes.length>0  && (
               <span
               className="mt-2 text-red-500 fade-in"
               >
                Debe de seleccionar una talla *

               </span>
            )
           }

            {/* selecto de tallas */}
         {
          sizes.length >1 &&
          (<SizeSelector
            selecdSize={size}
            availableSizes={sizes}
            onSizeChanged={setSize}
            />)
          }
        <div className=" flex  pt-4 pb-3">
          <QuantitySelector 
          quantity={Quantity}
          onquantityChange={setQuantity}
          />
        </div>

        <div className=" flex  pt-4 pb-3 justify-left items-center">
        <IoAddCircleOutline size={25} className="text-red-400" />
        <h3 className="font-bold text-4x text-red-400 ml-3">Añadir a tus favoritos</h3>
        </div>

       

        {/* button */}
       <button
        className="btn-primary my-3"
        onClick={addTocart}
        >
          Agregar al carrito
        </button>

    </>
  )
}
