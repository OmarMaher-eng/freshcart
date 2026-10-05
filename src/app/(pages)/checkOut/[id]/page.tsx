"use client"

import { Button } from '@/components/ui/button'
import { Field, FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { DollarSign, Loader, LogIn } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Controller, useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import { checkOutSchema, CheckOutSchemaType } from '@/app/schema/checkOut.schema'
import { onlinePayment } from '@/CheckoutAction/Checkoutsession.action'


export default function CheckOut() {

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const {id} :{id:string}= useParams() 
    // console.log(id);
    
   const form =  useForm<CheckOutSchemaType>({
      defaultValues:{
        details:"",
        phone:"",
        city : "",
       
      },
      resolver:zodResolver(checkOutSchema),
      mode: "all"
    })


    const handleCheckOut=async (values: CheckOutSchemaType )=>{
      // console.log(values);
      setIsLoading(true)

      try {
        setIsLoading(true)
        const response = await onlinePayment(id , "http://localhost:3000/" , values )
        // console.log("paymenttttt" , response)
        if(response.status="success"){
          window.location.href = response.session.url
        }
      } catch (error) {
        
      } finally{
        setIsLoading(false)
      } 




      
     }

    interface FormField {
      name :  "details" | "phone" | "city" 
      type : string,
      placeholder : string,
      autoComplete : string, 
    }

    const FormFields : FormField[]  = [
     
      {name:"details" , type:"text" , placeholder:"Enter Your Details" , autoComplete:"details"},
      {name:"phone" , type:"tel" , placeholder:"Enter Your password" , autoComplete:"password"},
      {name:"city" , type:"text" , placeholder:"Enter Your City" , autoComplete:"city"},
    ]



  return (
  <>
  
  <div className="w-[90%] lg:w-[60%] p-5 my-5 shadow-2xl mx-auto rounded-2xl ">
    <h2 className="text-2xl text-center text-green-600">CheckOut</h2>

    {/* <form onSubmit={form.handleSubmit(handleRegister, (errors) => console.log("Form Validation Errors:", errors))}> */}
  <form onSubmit={form.handleSubmit(handleCheckOut)}>
   {FormFields.map((myInput)=> <Controller
        key={myInput.name}
        name={myInput.name}
        control={form.control}
        render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
     
      <Input
      className='my-4 p-5'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder={myInput.placeholder}
        autoComplete={myInput.autoComplete}
        type={myInput.type}
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>)}
    
    <Button disabled={isLoading} type="submit" className="w-full bg-green-600 hover:bg-green-500 cursor-pointer transition-all duration-300 ">{isLoading ? <Loader className='animate-spin' /> :<>pay now <DollarSign /></>}</Button>
  </form>
  </div>
  
  </>
  )
}
