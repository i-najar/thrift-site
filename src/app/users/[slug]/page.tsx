"use client";

import { users } from "@/data/users";
import { products } from "@/data/products";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { StarRating } from "@/components/StarRating";
import Image from "next/image";

export default function UserPage() {
  const params = useParams();
  const user = users.find((u) => u.slug === params?.slug);

  if (!user) return notFound();

  const userProducts = products.filter((p) => p.userId === user.id);

  return (
    <section className="p-6 max-w-6xl mx-auto space-y-10">
      <div className="flex items-center gap-6">
        <Avatar className="w-20 h-20">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-muted-foreground">{user.bio}</p>
          {user.rating && <StarRating rating={user.rating} />}
        </div>
      </div>

      {user.photos?.length > 0 && (
        <div className="flex gap-4 overflow-x-auto">
          {user.photos.map((photo, i) => (
            <Image
              key={i}
              src={photo}
              alt={`Photo of ${user.name}`}
              width={200}
              height={200}
              className="rounded-lg object-cover"
            />
          ))}
        </div>
      )}

      {userProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Products by {user.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {userProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
