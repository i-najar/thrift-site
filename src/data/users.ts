export type Review = {
  productSlug: string;
  comment: string;
  rating: number;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  image?: string;
  date: string;
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
  posts?: Post[];
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
        rating: 4.5,
      },
      {
        productSlug: "sneakers-1",
        comment:
          "Fresh and comfortable! All my coworkers asked me where they're from. Well, haha, it's my little secret!",
        rating: 5,
      },
      {
        productSlug: "sweater-1",
        comment:
          "Really warm. Like, really, REALLY warm. Makes me feel like a toaster strudel, haha!",
        rating: 4.8,
      },
    ],
    posts: [
      {
        id: "1",
        title: "Well... Hello",
        content:
          "Um, is this thing on? Haha. Hi. I just wanted to wish everyone a happy autumn! I know I'm about a month late, but, you know. I just thought it would be sweet! :)",
        date: "10/20/2025",
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
        rating: 3,
      },
      {
        productSlug: "sweater-2",
        comment: "hmph... not bad...",
        rating: 4,
      },
    ],
    posts: [
      {
        id: "1",
        title: "testing...",
        content: "ugh... hello?",
        date: "10/20/2025",
      },
      {
        id: "2",
        title: "hello does this ",
        content: "not again...",
        date: "10/20/2025",
      },
      {
        id: "3",
        title: "holiday season.",
        content:
          "i wrote a poem about the holidays:\ngrandma made turkey\n and i didnt like it...\n cousins are late...\n again...",
        date: "12/15/2025",
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
        rating: 5,
      },
      {
        productSlug: "trousers-1",
        comment: "COOL COOL COOL COOOOOOOOOOOOL",
        rating: 5,
      },
      {
        productSlug: "coat-1",
        comment: "BRR BRR HAHA JK WARMM",
        rating: 5,
      },
    ],
    posts: [
      {
        id: "1",
        title: "WOW",
        content:
          "OKAY THIS IS AWESOME. I LOVE BEING ABLE TO SHARE MY THOUGHTS HAHA. THE GREEN SHOE WIZARD KEEPS CONTACTING ME ON MY WHATSAPP... NOT SURE HOW HE GOT MY NUMBER",
        date: "10/14/2025",
      },
      {
        id: "2",
        title: "GREEN SHOE WIZARD UPDATE",
        content:
          "THE WIZARD FOUND MY INSTAGRAM AND HES JUST COMMENTING GIFS OF GREEN SHOES UNDER EVERY POST??? I DMED HIM AND HE ONLY REPLIED WITH '...'",
        date: "12/14/2025",
      },
    ],
  },
  {
    id: "4",
    name: "Mer",
    slug: "mer",
    avatar: "/images/avatars/user-4.png",
    bio: "emptying out my wardrobe. ill throw in a bonus if you're a prev customer ✨",
    rating: 4.5,
    reviews: [
      {
        productSlug: "coat-1",
        comment: "nice and warm. good quality--would buy again",
        rating: 4.5,
      },
      {
        productSlug: "sneakers-1",
        comment: "chic and works with any wardrobe tbh",
        rating: 5,
      },
      {
        productSlug: "sweater-2",
        comment: "comfy but the packaging was kinda meh",
        rating: 4.2,
      },
    ],
    posts: [
      {
        id: "1",
        title: "Wardrobe Update 🌟",
        content:
          "currently stocking up on mittens, gloves, and scarves for winter, expect them in the following weeks ❄️ (discount if you buy 2 or more!)",
        date: "12/12/2025",
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
        rating: 0,
      },
      {
        productSlug: "sweater-1.jpg",
        comment: "ef098uiw09u809u8iwfu098efw",
        rating: 4.8,
      },
      {
        productSlug: "sweater-2",
        comment: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalpppppppppppppppppppp;",
        rating: 4.3,
      },
      {
        productSlug: "trousers-1",
        comment: "jipfjipejige",
        rating: 4.7,
      },
    ],
    posts: [
      {
        id: "1",
        title: "e",
        content: "fkmlsmlkasgknwg9884g9498-3gn99nnnbbbbb",
        date: "8/3/2025",
      },
      {
        id: "2",
        title: "kmmkmm00994",
        content:
          "jfe0t8310t9-jjfajf 'SANTA CLAUS' jjieoide-98y9ht8749yht98hyhtu7wei8j",
        date: "11/20/2025",
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
    posts: [
      {
        id: "1",
        title: "Greetings.",
        content:
          "Salutations to all entities who have used their autonomy to navigate to this webpage that you are watching like most human beings do in this day and age. I would like to extend my gratitude that we oxygen-dependent eukaryotic mammals can use this application hosted on the internet to communicate with each other, as we are social beings.",
        date: "10/20/2025",
      },
    ],
  },
  {
    id: "7",
    name: "The Alligator",
    slug: "the-alligator",
    avatar: "/images/avatars/user-7.png",
    bio: "The Alligator sells products procured by yours truly (The Alligator).",
    rating: 3,
    posts: [
      {
        id: "1",
        title: "Enough Is Enough.",
        content:
          "I tire of the scurrilous attacks on my integrity as a reseller. I do a lot (A LOT) to procure the items I list for sale on my profile. I WILL report you to the moderation team if you decide to engage me with a bitter heart. - The Alligator",
        date: "10/20/2025",
      },
      {
        id: "2",
        title: "Big Things Are Coming...",
        content:
          "Prepare yourselves for an EXCLUSIVE drop. You may have seen a preview if you're subscribed to my Substack (I encourage you to DM me for the link... You will get access to never-before-seen luxury clothes AND the chance to win a raffle for a mug signed by YOURS TRULY...)... It is going to be, by account of MULTIPLE industry TITANS, the MOST-sought-after item of 2026. Only TWO HUNDRED were made by the yet-to-be-revealed designer. As for how many I was graciously given? Well, you'll have to wait and see... Stay tuned - The Alligator",
        date: "12/10/2025",
      },
    ],
  },
  {
    id: "8",
    name: "Cleo",
    slug: "cleo",
    avatar: "/images/avatars/user-8.png",
    bio: "A Marmoreal Wanderer With An Interest in Fashion",
    rating: 5,
  },
];
