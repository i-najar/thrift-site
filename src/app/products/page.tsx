"use client";

import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Browse Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
