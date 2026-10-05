'use server'

import getMyToken from "@/Utilites/GetMyToken.utilites";


export async function UpdateCartQuantity(id:string,count:number){

     const data = await getMyToken()
                const token = data?.token;
            if(!token){
                throw new Error("logain first please")
            }

    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${id}`,{
        method:"PUT",
        headers:{
            token,
            "Content-type":"application/json"
        },
        body:JSON.stringify({count:Number(count)})
    })
    const payLoad = await response.json()
    return payLoad
}