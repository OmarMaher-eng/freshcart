'use server'

import getMyToken from "@/Utilites/GetMyToken.utilites"



export async function AddProductToCart(id : string){

   
    

    const data = await getMyToken()
    const token = data?.token;

    
    if(!token){
        throw new Error("login first")
    }


    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
        method:"POST",
        headers:{
            token,
            "Content-type":"application/json"
        },
        body:JSON.stringify({productId:id})
    })
    const payLoad = await response.json()
    return payLoad;
    
}