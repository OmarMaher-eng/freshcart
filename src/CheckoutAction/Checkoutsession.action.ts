"use server"

import getMyToken from "@/Utilites/GetMyToken.utilites";


interface Shipping{
    details:string,
    phone:string,
    city:string
}

export async function onlinePayment(cartId:string , url:string , values:Shipping){

     const data = await getMyToken()
        const token = data?.token;
    
        
        if(!token){
            throw new Error("login first")
        }

    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,{
        method:"POST",
        headers:{
            token,
            "Content-type":"application/json"
        },
        body:JSON.stringify({shippingAddress:values})
    })
    const payLoad = await response.json()
    return payLoad
}