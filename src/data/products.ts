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
  categories: string[];
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
    categories: ["knitwear", "sweater"],
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
    categories: ["sweater", "jumper"],
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
    categories: ["outerwear", "coat"],
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
    categories: ["bottoms", "trousers", "pants"],
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
    categories: ["sneakers", "footwear", "shoes"],
  },
  {
    id: "6",
    name: "Grey Hoodie",
    slug: "hoodie-1",
    image: "/images/products/hoodie-1.jpg",
    description:
      "One of the most exquisite members of David B's groundbreaking streetwear collection: Everyday Statements. Procured from the factory itself (don't ask)... HEAVILY discounted at 45%.",
    price: 726.99,
    rating: 2,
    size: "XL",
    color: "Grey",
    condition: "New",
    userId: "7",
    categories: ["hoodie", "tops", "sweatshirt"],
  },
  {
    id: "7",
    name: "Green Loafers (MAGIC?!)",
    slug: "loafers-1",
    image: "/images/products/loafers-1.jpg",
    description:
      "FOUND THESE HIKING WITH A BUD OF MINE FROM COLLEGE LAST WEEKEND. PRETTY GOOD CONDITION BUT THEY EMIT THIS WEIRD AURA LOL I WORE THEM ONCE (IM CLEAN I SWEAR) AND I STARTED LEVITATING???",
    price: 109.99,
    rating: 3,
    size: "9",
    color: "Green",
    condition: "Used",
    userId: "3",
    categories: ["loafers", "footwear", "shoes"],
  },
  {
    id: "8",
    name: "White Knitted Cardigan",
    slug: "cardigan-1",
    image: "/images/products/cardigan-1.jpg",
    description:
      "Gently knit cardigan as though spun by a sartorial muse's thread.",
    price: 69.99,
    rating: 5,
    size: "S",
    color: "White",
    condition: "New",
    userId: "8",
    categories: ["tops", "knitwear", "cardigan"],
  },
  {
    id: "9",
    name: "Chocolate Trousers",
    slug: "trousers-2",
    image: "/images/products/trousers-2.jpg",
    description: "Wide-fit chocolate trousers. Still chic.",
    price: 79.99,
    rating: 4,
    size: "8",
    color: "Brown",
    condition: "New",
    userId: "4",
    categories: ["bottoms", "trousers", "pants"],
  },
];
