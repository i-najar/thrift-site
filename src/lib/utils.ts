import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Product } from "@/data/products";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Filters = {
  category: string[];
  size: string;
  condition: string;
  price: [number, number];
};

export function filterProducts(products: Product[], filters: Filters) {
  return products.filter((product) => {
    const isCategoryMatch =
      filters.category.length > 0
        ? filters.category.some((c) => product.categories.includes(c))
        : true;
    const isSizeMatch = filters.size ? product.size === filters.size : true;
    const isConditionMatch = filters.condition
      ? product.condition === filters.condition
      : true;
    const isPriceMatch =
      product.price >= filters.price[0] && product.price <= filters.price[1];

    return isCategoryMatch && isSizeMatch && isConditionMatch && isPriceMatch;
  });
}
