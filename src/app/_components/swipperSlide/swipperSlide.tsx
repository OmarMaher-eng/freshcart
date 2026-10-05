'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { ProductType } from '@/types/allProducts.types';
import AddBtn from '../AddBtn/AddBtn';
export default function SwipperSlider({data} :{data:ProductType}) {
    //  console.log('productdetail' , data);
     const [selectedImage, setSelectedImage] = useState(data.imageCover)
  return (
   <>
     

     <div className='w-[90%] mx-auto mt-20'>
   <div className='flex items-center'>
     <div className='w-full md:w-1/4'>
        <img src={selectedImage} alt="" /> 

      <Swiper
      spaceBetween={50}
      slidesPerView={4}
    
    >

        {data.images.map((image)=><SwiperSlide onClick={()=>setSelectedImage(image)}><img src={image} alt="" /></SwiperSlide>)}
      
      
      ...
    </Swiper>   

      



    </div>
    <div className='w-full md:w-3/4'>
        <h2 className='text-green-600 text-xl font-semibold'>{data.title}</h2>
        <p className='my-3'>{data.description}</p>  

          <div className='flex justify-between items-center my-2'>
              <div className='star-left'>
                <span>{data.price} EGP</span>
              </div>
              <div className='star-right'>
                <span className='flex items-center'>{data.ratingsAverage} <Star size={16} className="text-[#FFC908]" fill='#FFC908'/></span>
              </div>
             </div> 

            <AddBtn showAlways id={data.id}/>
    </div>
   </div>
   </div>
   
   
   </>
  )
}
