"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { ProductCarousel } from "@/components/ProductCarousel";
import { ProductAccordion } from "@/components/ProductAccordion";
import { ProductReviews } from "@/components/ProductReviews";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const slug = params!.slug as string;

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <main className="p-8 space-y-8 mt-20">
      {/* Carousel */}
      <section className="w-6/12 mx-auto flex justify-center items-center">
        <ProductCarousel images={[product.image]}></ProductCarousel>
      </section>

      {/* Accordion */}
      <section className="w-6/12 mx-auto flex justify-center items-center">
        <ProductAccordion product={product} />
      </section>

      {/* Product Reviews */}
      <section className="w-6/12 mx-auto flex justify-center items-center">
        <ProductReviews productSlug={product.slug} />
      </section>
    </main>
  );
}
