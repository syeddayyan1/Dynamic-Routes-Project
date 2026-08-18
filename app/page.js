import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products");

  const products = await response.json();

  return (
    <main className="min-h-screen bg-gray-950 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Our Collection
          </p>

          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Explore Our Products
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Discover premium products selected just for you.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </main>
  );
}