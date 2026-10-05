import { Button } from '@base-ui/react/button'
import { CreditCardMinus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CheckOutBtn({cartId}:{cartId: string}) {
  return (
     <>
     <Link href={`/checkOut/${cartId}`} >
      <Button  className="flex cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 rounded-full">CheckOut <CreditCardMinus /></Button>
     
     </Link>
       
        
        </>
  )
}
