import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ProductCarouselProps = {
  images: string[];
};

export function ProductCarousel({ images }: ProductCarouselProps) {
  return (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="rounded-none">
                <CardContent className="flex items-center justify-center p-2">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    width={400}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
