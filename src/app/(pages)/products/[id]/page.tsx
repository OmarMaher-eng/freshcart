

import { getProductsDetails } from '@/api/productDetails.aoi';



import React from 'react'
import { SwiperSlide } from 'swiper/react';
import SwipperSlider from '@/app/_components/swipperSlide/swipperSlide';

export default async function ProductDetial({params} :{params:Promise<{id:string}>}) {

    let {id} = await params
    // console.log(id);
    

    let {data} =await getProductsDetails(id)
   
    
  return (
   <>
  
   <SwipperSlider data={data}/>
   </>
  )
}
