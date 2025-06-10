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
  userId: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Knitted Sweater",
    slug: "sweater-1",
    image: "/images/products/sweater-1.jpg",
    description: "Off-white medium gauge cable knit sweater.",
    price: 59.99,
    rating: 4.5,
    size: "M",
    color: "Off-white",
    condition: "New",
    userId: "4",
  },
  {
    id: "2",
    name: "Striped Sweater",
    slug: "sweater-2",
    image: "/images/products/sweater-2.jpeg",
    description: "WICKED BLACK AND WHITE STRIPED SWEATER COMFYYY.",
    price: 49.99,
    rating: 3.8,
    size: "L",
    color: "Striped B&W",
    condition: "Used",
    userId: "3",
  },
  {
    id: "3",
    name: "Coat",
    slug: "coat-1",
    image: "/images/products/coat-1.jpg",
    description:
      "Light brown hooded coat with drawstring designed for bipeds like you and me to wear over our torsos.",
    price: 119.99,
    rating: 4.0,
    size: "XS",
    color: "Brown",
    condition: "New",
    userId: "6",
  },
  {
    id: "4",
    name: "Trousers",
    slug: "trousers-1",
    image: "/images/products/trousers-1.jpg",
    description: "Flared brown trousers.",
    price: 59.99,
    rating: 5,
    size: "M",
    color: "Brown",
    condition: "New",
    userId: "4",
  },
  {
    id: "5",
    name: "pkmakejge",
    slug: "sneakers-1",
    image: "/images/products/sneakers-1.jpg",
    description: "fkmlmkognpnwagn0gw0gn04ng0wng.",
    price: 89.99,
    rating: 5,
    size: "8",
    color: "900uj3098",
    condition: "New",
    userId: "5",
  },
];
