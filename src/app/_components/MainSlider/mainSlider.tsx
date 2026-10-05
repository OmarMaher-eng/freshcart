"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import image1 from "../../../../public/images/images02.jpg"
import image2 from "../../../../public/images/images03.jpg"
import image3 from "../../../../public/images/images04.jpg"
import image4 from "../../../../public/images/images07.jpg"
import image5 from "../../../../public/images/images05.jpg"
import { Autoplay } from 'swiper/modules'
export default function MainSlider() {
  return (
   <>
   
   <div className='w-[90%] mt-1 mx-auto flex items-center'>
    <div className='w-3/4'>
         <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay = {{delay:3000}}
    >
      <SwiperSlide>
          <Image src={image1} alt=""  className="w-full h-100 object-cover"/>
      </SwiperSlide>
       <SwiperSlide>
          <Image src={image2} alt=""  className="w-full h-100 object-cover"/>
      </SwiperSlide>
       <SwiperSlide>
          <Image src={image3} alt=""  className="w-full h-100 object-cover"/>
      </SwiperSlide>
      
    </Swiper>
    </div>
    <div className='w-1/4'>
        <Image src={image4} alt=""  className="w-full h-50 object-cover"/>
        <Image src={image5} alt=""  className="w-full h-50 object-cover"/>
    </div>
   </div>
   
   </>
  );
}