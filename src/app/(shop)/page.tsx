
import { categoruProduct } from '@/api/CategoryProduct'
import {   SlideShowImage } from '@/components'
import { ProductCardHome } from '@/components/product/productCardhome/ProductCardHome'
import Link from 'next/link'
import { titleFont } from '../config/fonts'

export default function Home() {
  return (
    <div className="">
     <SlideShowImage/>
     
     <div className='m-2 p-5 flex flex-col justify-center '>
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
            <div className=' flex justify-evenly items-center p-8  '>
            {
              category.product.map(product=>(
                 //todo link pending 
                   <Link href={`product/${product.id}`}>
                      <ProductCardHome {...product}/>
                   </Link>
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
