import { getAllBrands } from '@/api/allBrands.api'
import { BrandType } from '@/types/allBrands.types'
import Link from 'next/link'

export default async function AllBrands() {
  const { data } = await getAllBrands()

  return (
    <section className="my-18 w-[90%] mx-auto">
      <h1 className="mb-6 text-2xl font-semibold">Shop by Brand</h1>
      {data.length === 0 ? (
        <p>No brands found.</p>
      ) : (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {data.map((brand: BrandType) => (
            <Link
              key={brand._id}
              href={`/brands/${brand._id}`}
              className="overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-md"
            >
              <img
                className="h-40 w-full object-contain p-4 sm:h-48"
                src={brand.image}
                alt={brand.name}
              />
              <h2 className="p-4 text-center font-medium">{brand.name}</h2>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
