import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Product } from "@/data/products";
import { StarRating } from "./StarRating";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <Card className="group overflow-hidden border-hidden transition hover:shadow-md rounded-none">
        {/* Image Section */}
        <div className="relative w-full aspect-[4/5]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain" //can put object-cover to make imgs larger; resolve styles
          />

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <Button variant="default" className="rounded-none">
              View
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col space-y-1 px-4 pt-1 pb-0 h-full">
          <div className="flex justify-between items-center text-base font-semibold">
            <CardTitle className="p-0 m-0">{product.name}</CardTitle>
            <span>${product.price.toFixed(2)}</span>
          </div>
          <CardContent className="p-0 text-sm text-muted-foreground">
            {product.description}
          </CardContent>

          <div className="pt-1">
            <StarRating rating={product.rating ?? 0} />
            <p>{product.size}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
