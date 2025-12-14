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

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="flex gap-6 border-b mb-4 rounded-none">
          <TabsTriggerItem value="posts">Posts</TabsTriggerItem>
          <TabsTriggerItem value="products">Products</TabsTriggerItem>
          <TabsTriggerItem value="feedback">Feedback</TabsTriggerItem>
        </TabsList>

        <TabsContent value="posts">
          {user.posts && user.posts.length > 0 ? (
            <div className="flex flex-col gap-6">
              {user.posts
                .sort((a, b) => b.id.localeCompare(a.id))
                .map((post) => (
                  <div
                    key={post.id}
                    className="border rounded-none shadow-sm hover:shadow-md transition"
                  >
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                    )}
                    <div className="p-4 space-y-2">
                      <h3 className="text-xl font-semibold">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                      <div className="text-muted-foreground">
                        {post.content.split("\n").map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
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
