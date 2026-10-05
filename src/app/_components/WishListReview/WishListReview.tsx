"use client"

import { WishListinggg } from '@/types/wishList.types'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Removeproductfromwishlist } from '@/wishListAction/Removeproductfromwishlist.action';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { Loader } from 'lucide-react';
import AddBtn from '../AddBtn/AddBtn';

export default function WishListReview({product} : {product:WishListinggg}) {

    console.log( "aaaaaaaaaaaaaa",product);
    
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)

   async function RemovewishList(){
      try {
        setIsLoading(true)
        const response = await Removeproductfromwishlist(product.id)
      console.log("delete" , response);
      if(response.status=="success"){
        toast.success(response.message,{position:"bottom-left" , autoClose:2000 , closeOnClick:true})
        router.refresh()
      }
      } catch (error) {
        toast.error("can't remove from wishList",{position:"bottom-left" , autoClose:2000 , closeOnClick:true})
      }finally{
        setIsLoading(false)
      }
      
    }
    
  return (
   <>
   <div className="flex items-center justify-between">
    <div className='flex items-center gap-4 mt-4'>
      <div>
        <img src={product.imageCover} alt={product.title} width={200} height={200}/>
      </div>
      <div>
        <h2 className='text-xl'>{product.title}</h2>
        <p className='text-green-500 text-xl'>{product.price} EGP</p>
      </div>
    </div>
    

   <div className="flex flex-col gap-2 ">
     <Button disabled={isLoading} onClick={()=>RemovewishList()} className=" bg-green-600 hover:bg-red-500 px-16 text-xl rounded-full cursor-pointer py-2">{isLoading ? <Loader className='animate-spin'/> : "Remove"}</Button>   
     <AddBtn  showAlways id={product.id}/>
   </div>
    
   </div>
   
   </>
  )
}
