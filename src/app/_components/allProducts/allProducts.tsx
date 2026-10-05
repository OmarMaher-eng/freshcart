import { getAllProducts } from '@/api/allProducts.api'
import React from 'react'
import { WishListinggg } from '@/types/wishList.types';
import SingleProduct from '../singleProduct/singleProduct';
import { ProductType } from '@/types/allProducts.types';
import { Getloggeduserwishlist } from '@/wishListAction/Getloggeduserwishlist.action';



export default async function AllProducts() {
  let {data} = await getAllProducts();
  console.log(data);

    const wishList = await Getloggeduserwishlist()
        // console.log( "ffffffffffffffff", wishList);

    const WishListIds = wishList.data.map((wishList:WishListinggg)=>wishList.id)    

  return (
  <>
  <title>Products</title>
  <div className='w-[90%] mx-auto  my-18'>
    <div className='flex flex-wrap '>
      {data.map((currentProduct :ProductType )=>
        <SingleProduct key={currentProduct.id} currentProduct={currentProduct} isWishListed={WishListIds.includes(currentProduct.id)}/>    
    )}
    </div>
  </div>
  
  </>
  )
}
