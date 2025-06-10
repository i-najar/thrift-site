"use client";

import { users } from "@/data/users";
import { products } from "@/data/products";
import { UserFeedback } from "@/components/UserFeedback";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { StarRating } from "@/components/StarRating";
import Image from "next/image";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTriggerItem } from "@/components/TabsTriggerItem";
import { users as allUsers } from "@/data/users";

export default function UserPage() {
  const params = useParams();
  const user = users.find((u) => u.slug === params?.slug);

  if (!user) return notFound();

  const userProducts = products.filter((p) => p.userId === user.id);

  const feedback = allUsers.flatMap(
    (reviewer) =>
      reviewer.reviews?.flatMap((review) => {
        const product = userProducts.find((p) => p.slug === review.productSlug);
        return product
          ? [
              {
                reviewer,
                product,
                comment: review.comment,
                rating: review.rating,
              },
            ]
          : [];
      }) ?? []
  );

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

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="flex gap-6 border-b mb-4 rounded-none">
          <TabsTriggerItem value="posts">Posts</TabsTriggerItem>
          <TabsTriggerItem value="products">Products</TabsTriggerItem>
          <TabsTriggerItem value="feedback">Feedback</TabsTriggerItem>
        </TabsList>

        <TabsContent value="posts">
          {user.photos?.length > 0 ? (
            <div className="flex gap-6 overflow-x-auto">
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
          ) : (
            <p className="text-muted-foreground">No posts available.</p>
          )}
        </TabsContent>

        <TabsContent value="products">
          {userProducts.length > 0 ? (
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
          ) : (
            <p className="text-muted-foreground">No products found.</p>
          )}
        </TabsContent>

        <TabsContent value="feedback">
          <UserFeedback userId={user.id} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
