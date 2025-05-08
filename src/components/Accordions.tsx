import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What are you?</AccordionTrigger>
        <AccordionContent>I don't know.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How are you?</AccordionTrigger>
        <AccordionContent>Thanks for asking.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Do you like this place?</AccordionTrigger>
        <AccordionContent>Unsure...</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
