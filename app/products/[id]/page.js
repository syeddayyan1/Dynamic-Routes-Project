export default async function ProductDetail({ params }) {
  const { id } = await params;

  const response = await fetch(
    `https://fakestoreapi.com/products/${id}`
  );

  const product = await response.json();

  return (
    <main className="min-h-screen bg-gray-950 px-6 py-12">
      <div className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center">

              <div className="grid w-full overflow-hidden rounded-3xl
        border border-gray-800 bg-gray-900 shadow-2xl md:grid-cols-2">

          {/* Product Image */}
          <div className="flex min-h-[450px] items-center justify-center bg-white p-10">
            <img
              src={product.image}
              alt={product.title}
                          className="max-h-[380px] max-w-full object-contain
              transition duration-500 hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center p-8 md:p-12">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              {product.category}
            </p>

            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              {product.title}
            </h1>

            <p className="mt-5 text-3xl font-bold text-blue-400">
              ${product.price}
            </p>

            <p className="mt-6 leading-7 text-gray-400">
              {product.description}
            </p>

         

            {/* Button */}
            <button className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-3
            font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20">
              Add to Cart
            </button>

          </div>

        </div>

      </div>
    </main>
  );
}