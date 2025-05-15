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
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Description</AccordionTrigger>
        <AccordionContent>{product.description}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Care Instructions</AccordionTrigger>
        <AccordionContent>
          Wash, Dry, Whatever. It's your product, haha!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Reviews</AccordionTrigger>
        <AccordionContent>
          Placeholder? Well... I didn't like it very much. But that's okay. Life
          is not always charitable.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
