"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { FilterAccordion } from "@/components/FilterAccordion";
import { FilterType, FilterValues } from "@/types/filters.types";
import { filterProducts } from "@/lib/utils";
import { products } from "@/data/products";

export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterValues>({
    category: [] as string[],
    size: "",
    condition: "",
    price: [0, 1000] as [number, number],
  });

  const handleFilterChange = (
    filterType: FilterType,
    value: string | string[] | [number, number] | number[] | FilterValues
  ) => {
    if (filterType === "reset") {
      setFilters({
        category: [] as string[],
        size: "",
        condition: "",
        price: [0, 1000] as [number, number],
      });
    } else {
      setFilters((prev) => ({
        ...prev,
        [filterType]: value,
      }));
    }
  };

  const filteredProducts = filterProducts(products, filters);

  return (
    <section className="p-6 flex">
      {/* Sidebar */}
      <div className="w-64 pr-4 sticky top-20">
        <h1 className="text-2xl font-bold mb-4">Browse Products</h1>
        <FilterAccordion
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products match your filters.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
