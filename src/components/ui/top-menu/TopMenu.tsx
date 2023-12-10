'use client'
import Link from 'next/link'
import Image from 'next/image';

import { titleFont } from '@/app/config/fonts'

import { IoSearchOutline,IoCartOutline,IoPersonCircleOutline,IoMenuOutline   } from "react-icons/io5";
import { TopMenuItem } from '../top-menu-item/TopMenuItem';
import { useUIStore } from '@/store';
import { FC } from 'react';



//todo pediente modificar
const itemMenu=[
  {
    categoryName:"Mujer"
  },
  {
    categoryName:"Hombre"
  },
  {
    categoryName:"Niños"
  },
  {
    categoryName:"Jugueteria"
  },
  {
    categoryName:"Regalos"
  },
  {
    categoryName:"Hogar"
  },
  {
    categoryName:"Mascotas"
  },
  {
    categoryName:"Belleza y bienestar"
  },
]
interface SubCategory {
  id:string,
  name:string
}

interface CategoriesSubcategories{
  id:string,
  name:string
  subCategory:SubCategory[]
}

interface Props{
  categoriesSubcategories:CategoriesSubcategories[];

}

export const TopMenu:FC <Props> =({categoriesSubcategories}) => {




  const openSideMenu=useUIStore(state=>state.openSideMenu)
  return (
    <nav className='flex flex-col justify-between items-center w-full bg-[rgba(245,245,245,255)]'>
       <div className='flex px-5 justify-between items-center w-full pb-5 pt-2 bg-[rgba(156,34,78,255)]'>       
            <div  className='m-2 p-2 rounded-md transition-all hover:bg-[#b76080] text-white'>
                    <IoMenuOutline   
                    className="w-10 h-10 text-cyan-50" 
                    onClick={openSideMenu}
                     />
    
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
      <div className='flex w-full justify-center bg-[rgba(211,207,184,255)] '>
        {/* <div className='flex relative group'> */}
          <ul className='flex items-center justify-center font-semibold'>
             {
              categoriesSubcategories.map(category=>(
                <TopMenuItem categoryName={category.name} key={category.id}  subcategories={category.subCategory}/>
              ))   
            } 
          </ul>
        </div>
      {/* </div> */}
    </nav>
  )
}
