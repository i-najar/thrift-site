export type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  slug: string;
  rating?: number;
  size: string;
  color: string;
  condition: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Knitted Sweater",
    slug: "sweater-1",
    image: "/images/sweater-1.jpg",
    description: "Off-white medium gauge cable knit sweater.",
    price: 59.99,
    rating: 4.5,
    size: "M",
    color: "Off-white",
    condition: "New",
  },
  {
    id: "2",
    name: "Striped Sweater",
    slug: "sweater-2",
    image: "/images/sweater-2.jpeg",
    description: "Black and white striped sweater.",
    price: 49.99,
    rating: 3.8,
    size: "L",
    color: "Striped B&W",
    condition: "Used",
  },
  {
    id: "3",
    name: "Coat",
    slug: "coat-1",
    image: "/images/coat-1.jpg",
    description:
      "Light brown hooded coat featuring front pockets and a drawstring.",
    price: 119.99,
    rating: 4.0,
    size: "XS",
    color: "Brown",
    condition: "New",
  },
  {
    id: "4",
    name: "Trousers",
    slug: "trousers-1",
    image: "/images/trousers-1.jpg",
    description: "Flared brown trousers.",
    price: 59.99,
    rating: 5,
    size: "M",
    color: "Brown",
    condition: "New",
  },
];
