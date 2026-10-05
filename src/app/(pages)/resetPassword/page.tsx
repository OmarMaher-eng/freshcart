"use client"

import { resetPasswording } from '@/AuthenticationAction/Authentication.action'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState("")
     const [email, setEmail] = useState("")
    const router = useRouter()
    // const email = useSearchParams()
      console.log(email);
    



    async function handleSumbit(e:React.FormEvent<HTMLFormElement>){
      e.preventDefault()
      const response = await resetPasswording( email ,  newPassword)
      console.log(response);
      if(response.token){
        toast.success('password change succesfully')
        router.push(`/login`)
      }
      else{
        toast.error(response.message)
      }
    }


  return (
    <>
    
    <div className='w-[50%] mx-auto shadow rounded-2xl p-5'>
        <form onSubmit={handleSumbit}>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter Your Email' className="w-full my-3 focus:outline-blue-500 p-5 rounded-2xl border border-green-600"/>
            <input onChange={(e)=>setNewPassword(e.target.value)} type="text" placeholder='Enter Your NewPassword' className="w-full focus:outline-blue-500 p-5 rounded-2xl border border-green-600"/>
            <button type='submit' className='px-6 py-4 my-4 bg-green-600 rounded-2xl block text-white cursor-pointer w-full'>Confirm Reset Code</button>
        </form>
    </div>
    
    
    </>
  )
}


