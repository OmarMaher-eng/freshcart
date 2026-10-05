"use client"

import { Addproducttowishlist } from '@/wishListAction/Addproducttowishlist.Action';
import { Removeproductfromwishlist } from '@/wishListAction/Removeproductfromwishlist.action';

import { Heart } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function WishListIcons({id , isWishListed} : {id:string , isWishListed:boolean}) {

    const [wishList, setIsWishList] = useState(isWishListed)

 async function TogglleWishList(){

    if(wishList){
      try {
        setIsWishList(false)
        const response = await Removeproductfromwishlist(id)
        // console.log("removecart" , response);
        if(response.status=="success"){
          toast.success(response.message,{position:"bottom-left" , autoClose:2000 , closeOnClick:true})
        }
        
      } catch (error) {
         toast.error("can't remove wishlist now",{position:"bottom-left" , autoClose:2000 , closeOnClick:true})
      }
    } else{
       try {
        setIsWishList(true)
     const response = await Addproducttowishlist(id)
    // console.log("wishlisttttttt" , response);
    if(response.status=="success"){
      toast.success(response.message,{position:"bottom-left" , autoClose:2000 , closeOnClick:true})
    }
   } catch (error) {
      toast.error("can't add product to wishlist now",{position:"bottom-left" , autoClose:2000 , closeOnClick:true})
   }
    }

   
  }



  return (
    <>
    <div onClick={()=>TogglleWishList()} className='bg-gray-300 p-2 rounded-full'>
        <Heart className={wishList ? "text-green-600 fill-green-600" : ""} />
    </div>
    
    </>
  )
}
