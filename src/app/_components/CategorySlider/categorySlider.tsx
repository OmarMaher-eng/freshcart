import { getAllCategories } from '@/api/allCategory.api';
import React from 'react'
import Slidring from '../Slidring/slidring';


export default async function CategorySlider() {

  const data = await getAllCategories()

  // console.log('all categories' , data);
      


  return (
    <>
    <div className='w-[90%] mx-auto my-5'>
    <h2 className ='text-xl mb-4'>Shop Popular Categories</h2>

     <Slidring data={data.data}/>

    </div>
    
    </>
  )
}
