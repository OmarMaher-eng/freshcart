"use client"

import { ClearUserCart } from '@/cartAction/ClearUserCart.action'
import { Button } from '@base-ui/react/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

export default function ClearCartBtn() {

    const router = useRouter()

   async function clearCart(){
      try{
          const response = await ClearUserCart()
        // console.log(response);
        if(response.status=="success"){
            toast.success(response.message ,{position:'top-right' , autoClose:2000 , closeOnClick:true})
            router.refresh()
        }else{
            toast.error("can't clear your cart",{position:'top-right' , autoClose:2000 , closeOnClick:true})
        }
      }catch(error){
         toast.error("can't clear your cart",{position:'top-right' , autoClose:2000 , closeOnClick:true})
      }
    }


  return (
    <>
  

     <Button onClick={()=>clearCart()} className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 mb-2 rounded-full">Clear Your Cart</Button>

   
    
    </>
  )
}
