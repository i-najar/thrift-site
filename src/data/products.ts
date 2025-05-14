export type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Knitted Sweater",
    image: "/images/sweater-1.jpg",
    description: "Off-white medium gauge cable knit sweater.",
    price: 59.99,
  },
  {
    id: "2",
    name: "Striped Sweater",
    image: "/images/sweater-2.jpeg",
    description: "Black and white striped sweater.",
    price: 49.99,
  },
  {
    id: "3",
    name: "Coat",
    image: "/images/coat-1.jpg",
    description:
      "Light brown hooded coat featuring front pockets and a drawstring.",
    price: 119.99,
  },
  {
    id: "4",
    name: "Trousers",
    image: "/images/trousers-1.jpg",
    description: "Flared brown trousers.",
    price: 59.99,
  },
];
