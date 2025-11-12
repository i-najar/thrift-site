"use client";

import { Button } from "@/components/ui/button";
import { LandingCarousel } from "@/components/LandingCarousel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="py-8 px-0 space-y-8 mt-10">
      {/*Carousel */}
      <section className="mx-auto flex justify-center items-center">
        <LandingCarousel
          items={[
            {
              src: "/images/products/sweater-2.jpeg",
              text: "Striped Sweaters",
            },
            {
              src: "/images/products/coat-2.jpg",
              text: "Coats For Writing Poetry",
            },
            {
              src: "/images/products/coat-3.jpg",
              text: "Autumn Neutrals",
            },
          ]}
        ></LandingCarousel>
      </section>

      {/*Accordion */}
      <section className="w-6/12 mx-auto flex justify-center items-center">
        <div className="flex flex-col gap-2">
          <Link href="/products">
            <Button
              variant="outline"
              className="rounded-none border-4 text-4xl p-6 ml-15"
            >
              Browse
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <p>Check out today&apos;s most popular products!</p>
        </div>
      </section>
    </main>
  );
}
