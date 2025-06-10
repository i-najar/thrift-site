import { users } from "@/data/users";
import { UserAvatar } from "@/components/UserAvatar";

type ProductReviewsProps = {
  productSlug: string;
};

export function ProductReviews({ productSlug }: ProductReviewsProps) {
  const productReviews = users.flatMap(
    (user) =>
      user.reviews
        ?.filter((rev) => rev.productSlug === productSlug)
        .map((rev) => ({
          name: user.name,
          slug: user.slug,
          avatar: user.avatar,
          comment: rev.comment,
        })) || []
  );

  if (productReviews.length === 0) {
    return <p className="text-muted-foreground">No reviews yet.</p>;
  }

  return (
    <div className="space-y-4">
      {productReviews.map((r, i) => (
        <div
          key={i}
          className="flex items-start space-x-4 p-4 border rounded-none"
        >
          <UserAvatar src={r.avatar} fallback={r.name[0]} />
          <div>
            <div>
              <a
                href={`/users/${encodeURIComponent(r.slug)}`}
                className="font-semibold text-sm group hover:underline hover:text-blue-600 transition"
              >
                {r.name}
              </a>
              <p className="text-muted-foreground">{r.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
