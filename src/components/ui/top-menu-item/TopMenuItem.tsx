import React, { FC } from 'react'
import { titleFont } from '@/app/config/fonts'
import Link from 'next/link'
import { IoCloseCircleOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5'
import clsx from 'clsx'

interface SubCategory {
  id:string,
  name:string
}

interface Props{
  categoryName:string
  subcategories:SubCategory[]
}

export const TopMenuItem:FC <Props> = ({categoryName,subcategories}) => {
  return (
<li className='relative group px-3 py-2'>
   
    <button 
    className={`${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-[#678680] 
    text-[rgba(0,81,89,255)] font-bold`}>
      {categoryName}
    </button>
    <div
    className='
    absolute top-0 right-0 transition
    group-hover:translate-y-12    
    inset-0
    translate-y-0 opacity-0 invisible 
    group-hover:opacity-100
    group-hover:visible
    duration-500
    ease-in-out
    group-hover:transform z-50
    min-w-[450px]
    transform
    '
    >
      <div
      className='relative top-6 p-6  bg-white rounded-xl shadow-xl w-full'
      >
        <div
          className='w-10 h-10 bg-white transform
            rotate-45 absolute top-0 z-0 -translate-x-4 
            transition-transform group-hover:translate-x-3
          duration-500 ease-in-out rounded-sm
              '
        ></div>
        <div className='relative z-10'>
          <div className='flex  h-[500px] '>
            <div className='mt-8'>
              <p className='uppercase tracking-wider text-gray-500 font-medium text-[13px]'>
                Categoria
              </p>
              <div className='mt-8 text-[15px]   text-[rgba(0,81,89,255)]  grid  grid-cols-4 grid-rows-8  gap-4 '>
              {
                subcategories.map(subcategory=>(
                  <div key={subcategory.id}  >
    
                    <Link href={'/'} 
                    className='block p-2  
                    -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50
                    hover:to-pink-50 hover:via-blue-50 transition
                    ease-in-out duration-300 text-[rgba(0,81,89,255)]  font-semibold
                    hover:text-indigo-600
                    '>{subcategory.name}</Link>
                  </div>
                      ))
              } 

              </div>
            </div>
          </div>
    
        </div>
    
      
      </div>
    </div>
    
   </li> 


  )
}



