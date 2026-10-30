"use client"
import { CategoryType } from '@/types/allCategories.types';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


export default function Slidring({data} : {data: CategoryType[]}) {

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
          {data.map((category)=><SwiperSlide key={category._id}>
            <Link href={`/categories/${category._id}`}>
              <img className='w-full h-50' src={category.image} alt={category.name} />
            </Link>
          </SwiperSlide>)}
          
          
        </Swiper>

  
    
    </>
  )
}
