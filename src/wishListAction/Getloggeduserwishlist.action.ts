"use server"

import getMyToken from "@/Utilites/GetMyToken.utilites";

export async function Getloggeduserwishlist(){
     const data = await getMyToken()
                    const token = data?.token;
                if(!token){
                    throw new Error("logain again!!!")
                }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
       method:"GET",
       headers:{
            token,
            "Content-type":"application/json"
       }
    })
    const payLoad = await response.json()
    return payLoad
}