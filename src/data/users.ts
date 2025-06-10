export type Review = {
  productSlug: string;
  comment: string;
};

export type User = {
  id: string;
  name: string;
  slug: string;
  avatar: string;
  bio?: string;
  rating?: number;
  photos?: string[];
  reviews?: Review[];
};

export const users: User[] = [
  {
    id: "1",
    name: "Glib",
    slug: "glib",
    avatar: "/images/avatars/user-1.png",
    bio: "Um, hello! I've never been good with these, haha. I just sell whatever! I hope you enjoy!",
    rating: 4.8,
    reviews: [
      {
        productSlug: "coat-1",
        comment: "Fluffy and fun! A little too large, but that's fine.",
      },
      {
        productSlug: "sneakers-1",
        comment:
          "Fresh and comfortable! All my coworkers asked me where they're from. Well, haha, it's my little secret!",
      },
      {
        productSlug: "sweater-1",
        comment:
          "Really warm. Like, really, REALLY warm. Makes me feel like a toaster strudel, haha!",
      },
    ],
  },
  {
    id: "2",
    name: "Bert",
    slug: "bert",
    avatar: "/images/avatars/user-2.png",
    bio: "Grr... don't like writing these... just leave a review... if you want...",
    rating: 3.6,
    reviews: [
      {
        productSlug: "coat-1",
        comment: "Mmh... good i guess...",
      },
      {
        productSlug: "sweater-2",
        comment: "hmph... not bad...",
      },
    ],
  },
  {
    id: "3",
    name: "TERRY",
    slug: "terry",
    avatar: "/images/avatars/user-3.png",
    bio: "WHATS UP IM TERRY I SELL WHATEVERS COOL AND WICKED K BYEEE HAHA",
    rating: 4.2,
    reviews: [
      {
        productSlug: "sneakers-1",
        comment: "YEAHHHHHHHHHHHHHHHHHHHHHHHHH",
      },
      {
        productSlug: "trousers-1",
        comment: "COOL COOL COOL COOOOOOOOOOOOL",
      },
      {
        productSlug: "coat-1",
        comment: "BRR BRR HAHA JK WARMM",
      },
    ],
  },
  {
    id: "4",
    name: "Mer",
    slug: "mer",
    avatar: "/images/avatars/user-4.png",
    bio: "emptying out my 2024 wardrobe. ill throw in a bonus if you're a prev customer ✨",
    rating: 4.5,
    reviews: [
      {
        productSlug: "coat-1",
        comment: "nice and warm. good quality--would buy again",
      },
      {
        productSlug: "sneakers-1",
        comment: "chic and works with any wardrobe tbh",
      },
      {
        productSlug: "sweater-2",
        comment: "comfy but the packaging was kinda meh",
      },
    ],
  },
  {
    id: "5",
    name: "kl;fklfw",
    slug: "kl-fklfw",
    avatar: "/images/avatars/user-5.png",
    bio: "USER HAS BEEN TEMPORARILY BANNED - Moderation Team",
    rating: 5,
    reviews: [
      {
        productSlug: "coat-1",
        comment: "flmaegpj-09j30t9j2-",
      },
      {
        productSlug: "sneakers-1",
        comment: "9i-0trf9oikekfoooooooooopoo    okkkkkkkkkkk",
      },
      {
        productSlug: "sweater-1.jpg",
        comment: "ef098uiw09u809u8iwfu098efw",
      },
      {
        productSlug: "sweater-2",
        comment: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalpppppppppppppppppppp;",
      },
      {
        productSlug: "trousers-1",
        comment: "jipfjipejige",
      },
    ],
  },
  {
    id: "6",
    name: "John Smith",
    slug: "john-smith",
    avatar: "/images/avatars/user-6.png",
    bio: "Greetings. My name is John Smith. I like to walk with my legs and look around the environment using my eyes. Many others like you and me have bought the physical goods I am distributing on this website.",
    rating: 4.6,
  },
];
