import { FC } from "react";

import Image from 'next/image'
import { titleFont } from "@/app/config/fonts";


 interface Props {
    id    : string;
    name  : string;
    price : number;
    rating: number;
    image : string;
  }

export const ProductCardHome:FC <Props> = ({name,price,image,id}) => {
  return (
        <div className="da relative flex  flex-col justify-center overflow-hidden bg-gray-50 rounded-3xl">
        <div className="absolute inset-0 bg-center dark:bg-black"></div>
        <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <Image
            src={image}
            className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
            alt={name}
            width={500}
            height={500}
            />
            </div>
            <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
            <h1 className={`${titleFont.className}  text-2xl text-black font-bold `}>{name}</h1>
            <h1 className={`${titleFont.className}   text-black font-bold  text-sm`}>${price}</h1>
            </div>
        </div>
        </div>
  )
}

