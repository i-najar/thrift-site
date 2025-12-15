import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Product } from "@/data/products"; // import the type

type ProductAccordionProps = {
  product: Product;
};

export function ProductAccordion({ product }: ProductAccordionProps) {
  return (
    <Accordion type="single" collapsible className="pl-3">
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Description</AccordionTrigger>
        <AccordionContent>{product.description}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Care Instructions</AccordionTrigger>
        <AccordionContent>{product.careInstructions}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
