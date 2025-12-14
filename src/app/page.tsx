"use client";

import { Button } from "@/components/ui/button";
import { LandingCarousel } from "@/components/LandingCarousel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="py-8 px-0 space-y-8">
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
      <section className="max-w-screen-md mx-auto flex justify-center items-center pt-8 pb-12">
        <div className="flex flex-col gap-8 items-center text-center">
          <Link href="/products">
            <Button
              variant="outline"
              className="relative overflow-hidden group rounded-none border-4 text-4xl font-bold p-6  border-black"
            >
              <span className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-300">
                <p className="pb-1">Browse</p>
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Button>
          </Link>
          <p>Check out today&apos;s most popular products!</p>
        </div>
      </section>
    </main>
  );
}
