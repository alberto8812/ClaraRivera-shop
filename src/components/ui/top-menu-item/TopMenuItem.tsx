import React, { FC } from 'react'
import { titleFont } from '@/app/config/fonts'


interface Props{
  categoryName:string
}

export const TopMenuItem:FC <Props> = ({categoryName}) => {
  return (
    <>
    <div className='hidden sm:block p-2  '>
       <button className={`${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-[#678680] text-[rgba(0,81,89,255)] font-bold`}>
         {categoryName}
       </button>
    </div>
           <div className='
           absolute top-0 right-0
           transition 
           group-hover:translate-y-12    
           inset-0
           translate-y-0 opacity-0 invisible 
           group-hover:opacity-100
           group-hover:visible
           duration-500
           ease-in-out
           group-hover:transform z-50
           min-w-[250px]
           transform
           '>
            <div className='relative top-6 p-6 bg-white
            rounded-xl 
            shadow-xl
            w-full
            '></div>
           </div>
      </>
  )
}
