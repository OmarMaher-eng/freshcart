import CartTable from '@/app/_components/CartTable/CartTable'
import { getLoggedUserCart } from '@/cartAction/getLoggedUserCart.action'
import React from 'react'

 
export  default async function Cart() {

  const response = await getLoggedUserCart()
  // console.log("responseeeeeeeeee",response)  
  return (
   <CartTable cart={response}/>
  )
}
