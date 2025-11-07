"use client";

import { useParams } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ProductCarousel } from "@/components/ProductCarousel";
import { ProductAccordion } from "@/components/ProductAccordion";
import { ProductReviews } from "@/components/ProductReviews";
import { products } from "@/data/products";
import { users } from "@/data/users";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function ProductPage() {
  const params = useParams();
  const slug = params!.slug as string;

  const product = products.find((p) => p.slug === slug);
  const user = users.find((u) => u.id === product?.userId);

  if (!product) return notFound();

  return (
    <main className="p-8 space-y-8 mt-20">
      {/* Product Detail Section */}

      <section className="flex flex-col lg:flex-row justify-center items-start max-w-screen-lg mx-auto">
        {/* Carousel */}
        <div className="w-full lg:w-auto mr-10 pr-5">
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
          {user && (
            <Link
              href={`/users/${user.slug}`}
              className="flex items-center space-x-2 group mt-2 transition hover:text-blue-600"
            >
              <Avatar className="w-6 h-6">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-sm group-hover:underline">
                View seller: {user.name}
              </span>
            </Link>
          )}
        </div>
      </section>

      {/* Accordion */}
      <section className="w-6/12 mx-auto flex justify-center items-center">
        <ProductAccordion product={product} />
      </section>

      {/* Product Reviews */}
      <div className="flex flex-col items-start justify-center ml-180">
        <p className="text-2xl font-bold mb-4">Reviews:</p>
        <section className="w-6/12">
          <ProductReviews productSlug={product.slug} />
        </section>
      </div>
    </main>
  );
}
