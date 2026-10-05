'use server'

import getMyToken from "@/Utilites/GetMyToken.utilites";



export async function removeProductCart(id:string){

    const data = await getMyToken()
            const token = data?.token;
        if(!token){
            throw new Error("logain first please")
        }

    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${id}`,{
        method:"DELETE",
        headers:{
            token,
            "Content-type":"application/json"
        }
    })
    const payLoad = await response.json()
    return payLoad

}    