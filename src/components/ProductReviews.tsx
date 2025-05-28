// components/ProductReviews.tsx
import { reviewers } from "@/data/reviews";
import { UserAvatar } from "@/components/UserAvatar";

type ProductReviewsProps = {
  productSlug: string;
};

export function ProductReviews({ productSlug }: ProductReviewsProps) {
  const productReviews = reviewers.flatMap((r) =>
    r.reviews
      .filter((rev) => rev.productSlug === productSlug)
      .map((rev) => ({
        name: r.name,
        avatar: r.avatar,
        initials: r.initials,
        comment: rev.comment,
      }))
  );

  if (productReviews.length === 0) {
    return <p className="text-muted-foreground">No reviews yet.</p>;
  }

  return (
    <div className="space-y-4">
      {productReviews.map((r, i) => (
        <div
          key={i}
          className="flex items-start space-x-4 p-4 border rounded-lg"
        >
          <UserAvatar src={r.avatar} fallback={r.initials} />
          <div>
            <p className="font-semibold">{r.name}</p>
            <p className="text-muted-foreground">{r.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
