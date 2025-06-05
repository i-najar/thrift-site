import { Star, StarHalf, Star as StarOutline } from "lucide-react";

type StarRatingProps = {
  rating: number; // e.g., 4.2
};

export function StarRating({ rating }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1 text-black-500">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-black" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-black" />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <StarOutline key={`empty-${i}`} className="w-4 h-4" />
      ))}
      <span className="text-gray-600 text-sm ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}
