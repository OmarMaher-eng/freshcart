

export const getAllCategories = async ()=>{
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`)

    if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data
}

export const getCategoryById = async (categoryId: string) => {
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${categoryId}`)

    if (!response.ok) {
        throw new Error(`Failed to fetch category: ${response.status} ${response.statusText}`)
    }

    return response.json()
}