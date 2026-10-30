

export  const getAllProducts = async ()=>{
   const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`)
   const data = await response.json()
return data;
}

export const getProductsByCategory = async (categoryId: string) => {
   const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`)

   if (!response.ok) {
      throw new Error(`Failed to fetch category products: ${response.status} ${response.statusText}`)
   }

   return response.json()
}

export const getProductsByBrand = async (brandId: string) => {
   const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`)

   if (!response.ok) {
      throw new Error(`Failed to fetch brand products: ${response.status} ${response.statusText}`)
   }

   return response.json()
}
