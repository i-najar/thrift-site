"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
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
    <Carousel opts={{ loop: true }} className="w-screen relative">
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
                <div className="text-white text-4xl font-bold border-5 border-white p-5 pt-3">
                  {item.text}
                </div>
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

// <Button
//   variant="outline"
//   className="rounded-none font-bold border-5 text-4xl p-7 text-white bg-transparent hover:bg-transparent hover:border-white hover:text-white"
// >
//   {item.text}
// </Button>;
