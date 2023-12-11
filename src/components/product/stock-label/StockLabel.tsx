'use client'

import { getStockBySlug } from "@/actions";
import { titleFont } from "@/app/config/fonts"
import { FC, useEffect, useState } from "react";


interface Props{
  slug:string;
}

export const StokcLabel:FC <Props> = ({slug}) => {

  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true)
   
   useEffect(() => {
    getStock()
   }, [])

   const getStock= async()=>{
   const getInStock= await getStockBySlug(slug);
   setStock(getInStock);
   setIsLoading(false);

   };


  return (
    <div>
      {
        isLoading
        ?(
         <h1 className={`${titleFont.className} antialiased font-bold text-lg animate-pulse bg-gray-200`}>
            &nbsp;
        </h1>

        ):
        (

        <h1 className={`${titleFont.className} antialiased font-bold text-lg`}>
           Disponibles: {stock}
         </h1>
        )
      }
    </div>
  )
}
