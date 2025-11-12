export type FilterType = "category" | "size" | "condition" | "price" | "reset";

export type FilterValues = {
  category: string[];
  size: string;
  condition: string;
  price: [number, number];
};

export type FilterAccordionProps = {
  filters: {
    category: string[];
    size: string;
    condition: string;
    price: [number, number];
  };
  onFilterChange: (
    filterType: FilterType,
    value: string | string[] | number[] | [number, number] | FilterValues
  ) => void;
};
