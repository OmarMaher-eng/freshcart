import { getBrandById } from '@/api/allBrands.api'
import AllProducts from '@/app/_components/allProducts/allProducts'

export default async function BrandProductsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const { data: brand } = await getBrandById(id)

  return (
    <>
      <title>{brand.name}</title>
      <AllProducts brandId={id} brandName={brand.name} />
    </>
  )
}
