import getMyToken from "@/Utilites/GetMyToken.utilites";


export async function Addproducttowishlist(id:string){

     const data = await getMyToken()
                const token = data?.token;
            if(!token){
                throw new Error("logain again!!!")
            }

    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
        method:"POST",
        headers:{
            token,
            "Content-type":"application/json"
        },
        body: JSON.stringify({productId : id})
    })
    const payLoad = await response.json()
    return payLoad
}