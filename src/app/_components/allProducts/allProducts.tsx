import { getAllProducts, getProductsByBrand, getProductsByCategory } from '@/api/allProducts.api'
import React from 'react'
import { WishListinggg } from '@/types/wishList.types';

import { ProductType } from '@/types/allProducts.types';
import { Getloggeduserwishlist } from '@/wishListAction/Getloggeduserwishlist.action';
import SingleProduct from '../singleProduct/SingleProduct';








export default async function AllProducts({
  categoryId,
  categoryName,
  brandId,
  brandName,
}: {
  categoryId?: string
  categoryName?: string
  brandId?: string
  brandName?: string
}) {
  const {data} = categoryId
    ? await getProductsByCategory(categoryId)
    : brandId
      ? await getProductsByBrand(brandId)
      : await getAllProducts();

    const wishList = await Getloggeduserwishlist()
        // console.log( "ffffffffffffffff", wishList);

    const WishListIds = wishList.data.map((wishList:WishListinggg)=>wishList.id)    

  return (
  <>
  <div className='w-[90%] mx-auto  my-18'>
    {(categoryName || brandName) && <h1 className="mb-6 text-2xl font-semibold">{categoryName || brandName}</h1>}
    <div className='flex flex-wrap '>
      {data.length === 0 ? (
        <p>No products found.</p>
      ) : (
        data.map((currentProduct :ProductType )=>
          <SingleProduct key={currentProduct._id} currentProduct={currentProduct} isWishListed={WishListIds.includes(currentProduct._id)}/>
        )
      )}
    </div>
  </div>
  
  </>
  )
}
