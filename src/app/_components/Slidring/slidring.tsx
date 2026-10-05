"use client"
import { getAllCategories } from '@/api/allCategory.api';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


export default function Slidring({data} : any) {

//  console.log('all categories' , data);
  
      


  return (
    <>
  

     <Swiper 
          spaceBetween={0}
          slidesPerView={2}
          modules={[Autoplay]}
          autoplay = {{delay:3000}}
          breakpoints={{640:{slidesPerView:3} , 768:{slidesPerView:4}, 1024:{slidesPerView:5}, 1280:{slidesPerView:7}}}
        >
          {data.map((category :any)=><SwiperSlide>
            <img className='w-full h-50' src={category.image} />
          </SwiperSlide>)}
          
          
        </Swiper>

  
    
    </>
  )
}

