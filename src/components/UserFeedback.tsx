import { users } from "@/data/users";
import { products } from "@/data/products";
import { UserAvatar } from "@/components/UserAvatar";
import Image from "next/image";
import { StarRating } from "@/components/StarRating";

type UserFeedbackProps = {
  userId: string;
};

export function UserFeedback({ userId }: UserFeedbackProps) {
  const userProducts = products.filter((p) => p.userId === userId);

  const reviews = users.flatMap(
    (reviewer) =>
      reviewer.reviews
        ?.filter((r) => userProducts.some((p) => p.slug === r.productSlug))
        .map((r) => {
          const product = userProducts.find((p) => p.slug === r.productSlug);
          return {
            reviewerName: reviewer.name,
            reviewerSlug: reviewer.slug,
            reviewerAvatar: reviewer.avatar,
            rating: reviewer.rating,
            comment: r.comment,
            productImage: product?.image,
            productSlug: product?.slug,
          };
        }) || []
  );

  if (reviews.length === 0) {
    return <p className="text-muted-foreground">No feedback yet.</p>;
  }

  return (
    <div className="space-y-4">
      {reviews.map((r, i) => (
        <div
          key={i}
          className="flex justify-between items-start border p-4 gap-4 break-all"
        >
          {/* Left side: avatar + text */}
          <div className="flex gap-4">
            <UserAvatar src={r.reviewerAvatar} fallback={r.reviewerName[0]} />
            <div>
              <a
                href={`/users/${encodeURIComponent(r.reviewerSlug)}`}
                className="font-semibold text-sm hover:underline hover:text-blue-600"
              >
                {r.reviewerName}
              </a>
              <p className="text-muted-foreground mt-1">{r.comment}</p>
              <div className="pt-1">
                <StarRating rating={r.rating ?? 0} />
              </div>
            </div>
          </div>

          {/* Right side: product image */}
          {r.productSlug && r.productImage && (
            <a href={`/products/${r.productSlug}`} className="shrink-0">
              <Image
                src={r.productImage}
                alt={`Product image for ${r.productSlug}`}
                width={48}
                height={48}
                className="rounded object-cover border"
              />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
