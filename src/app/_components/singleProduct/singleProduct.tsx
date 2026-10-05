import React from 'react'
import { Button } from "@/components/ui/button"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Heart, Star } from 'lucide-react';
import Link from 'next/link';
import { ProductType } from '@/types/allProducts.types';
import AddBtn from '../AddBtn/AddBtn';
import WishListIcons from '../WishListIcons/WishListIcons';






export default function SingleProduct({currentProduct , isWishListed} : {currentProduct:ProductType , isWishListed:boolean}) {
  return (
    <>
     <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 '>
            <div className='inner p-5'>
      
                 <Card className="w-full max-w-sm ring-0 hover:ring-1 hover:ring-green-600 cursor-pointer group">
                  <div className='flex justify-end '>
                   <WishListIcons id={currentProduct.id} isWishListed={isWishListed}/>
                  </div>

                     <Link href={`/products/${currentProduct.id}`}>
          <CardHeader>
            <CardTitle>
              <img src={currentProduct.imageCover} alt={currentProduct.title} />
            </CardTitle>
            <CardDescription>
             <h2 className='text-green-600 text-xl'>{currentProduct.category.name}</h2>
             <p className='text-black font-semibold'>{currentProduct.title}</p>
             <div className='flex justify-between items-center my-2'>
              <div className='star-left'>
                <span>{currentProduct.price} EGP</span>
              </div>
              <div className='star-right'>
                <span className='flex items-center'>{currentProduct.ratingsAverage} <Star size={16} className="text-[#FFC908]" fill='#FFC908'/></span>
              </div>
             </div>
            </CardDescription>
          </CardHeader>
           </Link>   



          <AddBtn id={currentProduct.id}/>
        </Card>
            </div>
          </div>
    
    
    
    </>
  )
}
