import { BrandType } from '@/types/allBrands.types'

interface BrandsResponse {
  data: BrandType[]
  metadata: {
    numberOfPages: number
  }
}

export const getAllBrands = async () => {
  const response = await fetch('https://ecommerce.routemisr.com/api/v1/brands')

  if (!response.ok) {
    throw new Error(`Failed to fetch brands: ${response.status} ${response.statusText}`)
  }

  const firstPage: BrandsResponse = await response.json()
  const remainingPages = await Promise.all(
    Array.from({ length: firstPage.metadata.numberOfPages - 1 }, async (_, index) => {
      const page = index + 2
      const pageResponse = await fetch(`https://ecommerce.routemisr.com/api/v1/brands?page=${page}`)

      if (!pageResponse.ok) {
        throw new Error(`Failed to fetch brands page ${page}: ${pageResponse.status} ${pageResponse.statusText}`)
      }

      const pageData: BrandsResponse = await pageResponse.json()
      return pageData.data
    }),
  )

  return {
    ...firstPage,
    data: [...firstPage.data, ...remainingPages.flat()],
  }
}

export const getBrandById = async (brandId: string) => {
  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${brandId}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch brand: ${response.status} ${response.statusText}`)
  }

  return response.json()
}
