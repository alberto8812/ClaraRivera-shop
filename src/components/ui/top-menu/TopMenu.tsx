import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

import { titleFont } from '@/app/config/fonts'

import { IoSearchOutline,IoCartOutline,IoPersonCircleOutline,IoMenuOutline   } from "react-icons/io5";


export const TopMenu = () => {
  return (
    <nav className='flex flex-col justify-between items-center w-full bg-[rgba(245,245,245,255)]'>
       <div className='flex px-5 justify-between items-center w-full pb-5 pt-2 bg-[rgba(156,34,78,255)]'>       
            <div>
                {/* <Link
                href={"/"}
                >
                    <span className={`${titleFont.className} antialiased font-bold  text-cyan-50`}>MarketPlace</span>
                </Link> */}
                <button className='m-2 p-2 rounded-md transition-all hover:bg-[#b76080] text-white'>
                    <IoMenuOutline   className="w-10 h-10 text-cyan-50"  />
                </button>
            </div>

            {/**  MENU  logo*/}
            <div className=''>
                <Image
                  src="/imgs/CLARA RIVERA_LOGO SLOGAN.png"
                  alt='logo shop'
                  className=''
                  width={350}
                  height={350}
                 />
            </div>
          
          {/* search cart, menu */}

          <div className='flex items-center'>
                  <Link  href="/search" className='mx-2'>
                    <IoSearchOutline  className="w-8 h-8  text-cyan-50" />
                  </Link>

                  <Link  href="/search" className='mx-2'>
                    <IoPersonCircleOutline   className="w-8 h-8  text-cyan-50" />
                  </Link>

                  <Link  href="/cart" className='mx-2'>
                    <div className='relative'>
                      <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>
                        3
                      </span>
                      <IoCartOutline  className="w-8 h-8 text-cyan-50"  />
                    </div>
                  </Link>



          </div>
      </div>
      <div>
          <span className={`${titleFont.className} m-5 p-5 rounded-md transition-all hover:bg-[#b76080] font-bold  `}>
            Envios gratis por compras superiores $100.000 COP
          </span>
      </div>
      <div className='flex w-full justify-center bg-[rgba(211,207,184,255)]'>
        <div className='hidden sm:block p-2 '>
            <span className={`${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-[#678680] text-[rgba(0,81,89,255)] font-bold`}>Mujer</span>
            <span className={`${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-[#678680] text-[rgba(0,81,89,255)] font-bold`}>Hombre</span>
            <span className={`${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-[#678680] text-[rgba(0,81,89,255)] font-bold`}>Niños</span>
            <span className={`${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-[#678680] text-[rgba(0,81,89,255)] font-bold`}>Jugueteria</span>
            <span className={`${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-[#678680] text-[rgba(0,81,89,255)] font-bold`}>Regalos</span>
            <span className={`${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-[#678680] text-[rgba(0,81,89,255)] font-bold`}>Hogar</span>
            <span className={`${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-[#678680] text-[rgba(0,81,89,255)] font-bold`}>Macotas</span>
            <span className={`${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-[#678680] text-[rgba(0,81,89,255)] font-bold`}>Belleza y bienestar</span>
          </div>
      </div>
    </nav>
  )
}
