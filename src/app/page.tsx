"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductCarousel } from "@/components/ProductCarousel";
import { Input } from "@/components/ui/input";
import { ProductAccordion } from "@/components/ProductAccordion";
import Link from "next/link";
import { AlertDialogDemo } from "@/components/Alert";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="p-8 space-y-8 mt-20">
      {/*Carousel */}
      <section className="w-6/12 mx-auto flex justify-center items-center">
        <ProductCarousel
          images={[
            "/images/coat-1.jpg",
            "/images/sneakers-1.jpg",
            "/images/sweater-1.jpg",
            "/images/sweater-2.jpeg",
            "/images/trousers-1.jpg",
          ]}
        ></ProductCarousel>
      </section>

      {/*Accordion */}
      <section className="w-6/12 mx-auto flex justify-center items-center">
        <div className="flex flex-col gap-2">
          <Link href="/products">
            <Button variant="default">
              Browse
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <p>Check out today's most popular products!</p>
        </div>
      </section>

      {/* Alert Dialog */}
      <section className="text-center">
        <AlertDialogDemo />
      </section>

      <section className="text-center text-blue-600">
        <p>Something Belongs Here!</p>
      </section>
    </main>
  );
}
