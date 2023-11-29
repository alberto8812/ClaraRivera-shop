'use client'

import Image from 'next/image';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px',
    width:'80hw'
    
  }




const slideImages = [
    {
      url: '/imgs/slide/img1.jpg',
      caption: 'Slide 1'
    },
    {
      url: '/imgs/slide/img2.jpg',
      caption: 'Slide 2'
    },
    {
      url: '/imgs/slide/img3.jpg',
      caption: 'Slide 3'
    },
  ];







export const SlideShowImage = () => {

  return (
    <div className="slide-container">
    <Slide>
     {slideImages.map((slideImage, index)=> (
        <div key={index} >
          <Image
                  src={`${slideImage.url}`}
                  alt={`${slideImage.caption}`}
                  className='w-full'
                  width={600}
                  height={600}
                  style={divStyle}
                  
                 />       
         </div> 
      ))} 
    </Slide>
  </div>
  )
}
