import { getAllCategories } from '@/api/allCategory.api'
import { CategoryType } from '@/types/allCategories.types'
import Link from 'next/link'

export default async function AllCategories() {
  const { data } = await getAllCategories()

  return (
    <section className="my-18 w-[90%] mx-auto">
      <h1 className="mb-6 text-2xl font-semibold">Shop by Category</h1>
      {data.length === 0 ? (
        <p>No categories found.</p>
      ) : (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {data.map((category: CategoryType) => (
            <Link
              key={category._id}
              href={`/categories/${category._id}`}
              className="overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-md"
            >
              <img
                className="h-40 w-full object-cover sm:h-48"
                src={category.image}
                alt={category.name}
              />
              <h2 className="p-4 text-center font-medium">{category.name}</h2>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
