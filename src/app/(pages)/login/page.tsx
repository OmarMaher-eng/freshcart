"use client"
import { loginSchema, loginSchemaType } from '@/app/schema/login.schema'
import { Button } from '@/components/ui/button'
import { Field, FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader, LogIn } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Controller, useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import {signIn} from "next-auth/react"
import { ok } from 'assert'


export default function Login() {

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
   const form =  useForm<loginSchemaType>({
      defaultValues:{
        
        email:"",
        password:"",
       
      },
      resolver:zodResolver(loginSchema),
      mode: "all"
    })


    const handleLogin=async (values: loginSchemaType )=>{
      console.log(values);
      setIsLoading(true)
      
      try{
       const response = await signIn("credentials" ,{
          email:values.email,
          password:values.password,
          redirect:false,
          callbackUrl:"/"
        })
        console.log("loginnnnn",response);
        
        if(response?.ok){
           toast.success("Login successfully" , {position:"top-right" , delay:2000 , autoClose:1500}) 
          setTimeout(()=>{
             router.push("/") 
          },2000);  
        }else{
          toast.error(response?.error || "something went wrong" , {position:"top-right" , delay:2000 , autoClose:1500})
        }

      }catch(error){
          toast.error( "something went wrong" , {position:"top-right" , delay:2000 , autoClose:1500})
      }finally{
      setIsLoading(false)
     }

     }

    interface FormField {
      name :  "email" | "password" 
      type : string,
      placeholder : string,
      autoComplete : string, 
    }

    const FormFields : FormField[]  = [
     
      {name:"email" , type:"email" , placeholder:"Enter Your Email" , autoComplete:"email"},
      {name:"password" , type:"password" , placeholder:"Enter Your Password" , autoComplete:"new-password"},
      

    ]



  return (
  <>
  
  <div className="w-[90%] lg:w-[60%] p-5 my-5 shadow-2xl mx-auto rounded-2xl ">
    <h2 className="text-2xl text-center">Welcome to FreshCart , Signup here:</h2>

    {/* <form onSubmit={form.handleSubmit(handleRegister, (errors) => console.log("Form Validation Errors:", errors))}> */}
  <form onSubmit={form.handleSubmit(handleLogin)}>
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
    <p className='mb-3'>New to FreshCart <Link href={'/registar'} className='text-green-600 hover:underline '>Signup Now</Link></p>
    <Link href={'/forgetPassword'}>
        <p className="text-green-600 hover:text-green-500 cursor-pointer text-md mb-2">Forget Password ?</p>
    </Link>
    
    <Button disabled={isLoading} type="submit" className="w-full bg-green-600 hover:bg-green-500 cursor-pointer transition-all duration-300 ">{isLoading ? <Loader className='animate-spin' /> :<>Login <LogIn /></>}</Button>
  </form>
  </div>
  
  </>
  )
}