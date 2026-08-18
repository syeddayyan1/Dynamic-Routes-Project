import Link from "next/link";

export default function ProductCard({ product }) {
  return (
      <div className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-900
    p-4 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-2xl">

      {/* Image */}
      <div className="flex h-64 items-center justify-center overflow-hidden rounded-xl bg-white p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="pt-5">

        <h2 className="line-clamp-2 min-h-[56px] text-lg font-semibold text-white">
          {product.title}
        </h2>

        <div className="mt-4 flex items-center justify-between">

          <p className="text-xl font-bold text-blue-400">
            ${product.price}
          </p>

          <Link href={`/products/${product.id}`}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold
             text-white transition hover:bg-blue-700">
            View Details
          </Link>

        </div>

      </div>
    </div>
  );
}