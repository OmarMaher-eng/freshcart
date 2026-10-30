import AllProducts from '@/app/_components/allProducts/allProducts'
import { getCategoryById } from '@/api/allCategory.api'

export default async function CategoryProductsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const { data: category } = await getCategoryById(id)

  return (
    <>
      <title>{category.name}</title>
      <AllProducts categoryId={id} categoryName={category.name} />
    </>
  )
}
