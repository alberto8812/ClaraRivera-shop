
import { categoruProduct } from '@/api/CategoryProduct'
import {   SlideShowImage } from '@/components'
import { ProductCardHome } from '@/components/product/productCardhome/ProductCardHome'
import Link from 'next/link'
import { titleFont } from '../config/fonts'

export default function Home() {
  return (
    <div className="">
     <SlideShowImage/>
     
     <div className='m-2 p-5 flex flex-col justify-cente items-center '>
      {
        categoruProduct.map(category=>(
          <div key={category.category} className=''>
            <div className='flex flex-col justify-center items-center'> 
              <div className='flex justify-center m-2 '>
                <span className={`${titleFont.className}  text-2xl text-[rgba(0,81,89,255)] font-bold p-4 border  border-[rgba(0,81,89,255)] rounded-3xl`}>{category.category}</span>
              </div>
              <div className=' w-80 justify-center flex  bg-gray-400 items-center' >
                <hr className='bg-gray-400 h-1'/>
              </div>
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-3  justify-evenly  items-end  p-5   gap-4 '>
            {
              category.product.map(product=>(
                 //todo link pending 
                  
                      <ProductCardHome {...product} key={product.id}/>
                   
                   ))
                  }
                  </div>
          </div>
        ))
      }
      
     </div>
    </div>
  )
}
