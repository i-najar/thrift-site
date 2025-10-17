import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type CarouselItemData = {
  src: string;
  text: string;
};

type LandingCarouselProps = {
  items: CarouselItemData[];
};

export function LandingCarousel({ items }: LandingCarouselProps) {
  return (
    <Carousel className="w-screen relative">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[400px] w-full overflow-hidden">
              <Image
                src={item.src}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="text-white text-5xl font-bold">{item.text}</div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white" />
    </Carousel>
  );
}
