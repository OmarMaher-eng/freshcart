"use client"

import { AddProductToCart } from '@/cartAction/AddToCart.Action'
import { Button } from '@base-ui/react/button'
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function AddBtn({id , showAlways=false} : {id:string , showAlways?:boolean}) {

      const router = useRouter()

      const [isLodaing, setIsLodaing] = useState(false)

    async function AddToCart(id : string){
       try{
        setIsLodaing(true)
         const response = await AddProductToCart(id)
             console.log(response);
             if(response.status=="success"){
                router.refresh()
                toast.success(response.message,{position:"top-right" , autoClose:2000 , closeOnClick:true})
             }else{
               toast.error("somthing went wrong",{position:"top-right" , autoClose:2000 , closeOnClick:true}) 
             }
        
       } catch(error){
               toast.error("somthing went wrong",{position:"top-right" , autoClose:2000 , closeOnClick:true})  
       }finally{
        setIsLodaing(false)
       }
        
    }

  return (
    <>
     <Button onClick={()=>AddToCart(id)} className={`w-[calc(100%-40px)] mx-5 text-white rounded-full bg-green-500 hover:bg-green-600 transition-all duration-300 cursor-pointer ${!showAlways ? "opacity-0 group-hover:opacity-100" : ""}`}>{isLodaing ? <Loader className='animate-spin'/> :" Add to Cart"}</Button>
    </>
  )
}
