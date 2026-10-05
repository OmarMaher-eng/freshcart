"use client"

import { removeProductCart } from '@/cartAction/RemoveProductFromCart'
import React from 'react'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function RemoveBtns({id} :{id:string}) {

  const router = useRouter()

  async function deletefromCart(id:string){
    try{
      const response = await removeProductCart(id)
    console.log(response);
    if(response.status=="success"){
      toast.success(response.message,{position:"top-right" , autoClose:2000 , closeOnClick:true})
      router.refresh()
    }else{
      toast.error("can't remove now",{position:"top-right" , autoClose:2000 , closeOnClick:true})
    }
    } catch(error){
      toast.error("can't remove now",{position:"top-right" , autoClose:2000 , closeOnClick:true})
    }
    
  }



  return (
    <>
    <button onClick={()=>deletefromCart(id)} className="font-medium text-fg-danger hover:underline cursor-pointer">Remove</button>
    
    </>
  )
}
