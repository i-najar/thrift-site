"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { FilterAccordion } from "@/components/FilterAccordion";
import { FilterType, FilterValues } from "@/types/filters.types";
import { filterProducts } from "@/lib/utils";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterValues>({
    category: [] as string[],
    size: "",
    condition: "",
    price: [0, 1000] as [number, number],
  });

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

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
    <section className="mt-5 p-6 flex md:p-4 flex-col md:flex-row">
      <div className="flex justify-between items-center mb-4 md:hidden">
        <h1 className="text-2xl font-bold">Browse Products</h1>
        <Button variant="outline" onClick={() => setIsMobileFilterOpen(true)}>
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>
      {/* Sidebar */}

      <div className="hidden md:block w-full md:w-64 md:pr-4 md:sticky md:top-20 flex-shrink-0">
        <h1 className="hidden md:block text-2xl font-bold mb-4">
          Browse Products
        </h1>
        <FilterAccordion
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
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

      {isMobileFilterOpen && (
        <div className="fixed inset-0 bg-white z-[60] p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Filter Products</h2>
            <Button
              variant="ghost"
              onClick={() => setIsMobileFilterOpen(false)}
            >
              Close
            </Button>
          </div>
          <FilterAccordion
            filters={filters}
            onFilterChange={(type, value) => {
              handleFilterChange(type, value);
            }}
          />
        </div>
      )}
    </section>
  );
}
