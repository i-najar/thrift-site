import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type LandingCarouselProps = {
  images: string[];
};

export function LandingCarousel({ images }: LandingCarouselProps) {
  return (
    <Carousel className="w-[90vw] mx-auto">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[300px] w-full overflow-hidden">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
