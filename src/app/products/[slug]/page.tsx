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
      {/* Product Detail Section */}

      <section className="flex flex-col lg:flex-row justify-center items-start max-w-screen-lg mx-auto">
        {/* Carousel */}
        <div className="w-full lg:w-auto mr-10">
          <ProductCarousel images={[product.image]}></ProductCarousel>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-auto space-y-3">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-muted-foreground">Size: {product.size}</p>
          <p className="text-muted-foreground">Color: {product.color}</p>
          <p className="text-muted-foreground">
            Condition: {product.condition}
          </p>
          <p className="text-xl font-bold">{product.price.toFixed(2)}</p>
        </div>
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
