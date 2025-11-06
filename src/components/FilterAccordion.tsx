import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FilterAccordionProps = {
  filters: {
    category: string[];
    size: string;
    condition: string;
    price: [number, number];
  };
  onFilterChange: (filterType: string, value: any) => void;
};

export function FilterAccordion({
  filters,
  onFilterChange,
}: FilterAccordionProps) {
  const categories = ["knitwear", "sweater", "pants"];
  const sizes = ["S", "M", "L", "XL"];
  const conditions = ["New", "Used", "Worn"];

  return (
    <Accordion type="single" collapsible className="w-full">
      {/* Category Filter */}
      <AccordionItem value="item-1">
        <AccordionTrigger>Category</AccordionTrigger>
        <AccordionContent>
          {categories.map((category) => (
            <div key={category}>
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onChange={() => {
                  if (filters.category.includes(category)) {
                    onFilterChange(
                      "category",
                      filters.category.filter((c) => c !== category)
                    );
                  } else {
                    onFilterChange("category", [...filters.category, category]);
                  }
                }}
              />
              <label>{category}</label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      {/* Size Filter */}
      <AccordionItem value="item-2">
        <AccordionTrigger>Size</AccordionTrigger>
        <AccordionContent>
          {sizes.map((size) => (
            <div key={size}>
              <input
                type="radio"
                checked={filters.size === size}
                onChange={() => onFilterChange("size", size)}
              />
              <label>{size}</label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      {/* Condition Filter */}
      <AccordionItem value="item-3">
        <AccordionTrigger>Condition</AccordionTrigger>
        <AccordionContent>
          {conditions.map((condition) => (
            <div key={condition}>
              <input
                type="radio"
                checked={filters.condition === condition}
                onChange={() => onFilterChange("condition", condition)}
              />
              <label>{condition}</label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      {/* Price Filter */}
      <AccordionItem value="item-4">
        <AccordionTrigger>Price</AccordionTrigger>
        <AccordionContent>
          <div>
            <label>Min Price: </label>
            <input
              type="number"
              value={filters.price[0]}
              onChange={(e) =>
                onFilterChange("price", [
                  Number(e.target.value),
                  filters.price[1],
                ])
              }
            />
            <label>Max Price: </label>
            <input
              type="number"
              value={filters.price[1]}
              onChange={(e) =>
                onFilterChange("price", [
                  filters.price[0],
                  Number(e.target.value),
                ])
              }
            />
          </div>
        </AccordionContent>
      </AccordionItem>
      <button
        className="mt-4 px-3 py-2 bg-gray-200 text-sm rounded hover:bg-gray-300"
        onClick={() =>
          onFilterChange("reset", {
            category: [],
            size: "",
            condition: "",
            price: [0, 1000],
          })
        }
      >
        Clear Filters
      </button>
    </Accordion>
  );
}
