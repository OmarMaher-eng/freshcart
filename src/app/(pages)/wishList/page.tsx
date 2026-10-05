

import WishListReview from '@/app/_components/WishListReview/WishListReview';
import { WishListinggg } from '@/types/wishList.types';
import { Getloggeduserwishlist } from '@/wishListAction/Getloggeduserwishlist.action'
import React from 'react'

export default async function WishList() {

  const response = await Getloggeduserwishlist()
      console.log( "ffffffffffffffff", response);

      if(response.data.length===0){
        return <div className="flex justify-center rounded-2xl p-5 bg-red-300 w-[50%] mx-auto text-4xl"><h1>Your Wishlist is Empty</h1></div>
      }
  

  return (
    <>
   <div className="w-[80%] mx-auto">
     <h2 className="border-b-2 text-2xl">My wishList</h2>
    {response.data.map((product : WishListinggg)=><WishListReview product={product}/>)}
   </div>
    
    
    </>
  )
}
