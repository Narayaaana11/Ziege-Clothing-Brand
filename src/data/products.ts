import monsterHoodieBlack from "@/assets/products/monster-hoodie-black.jpg";
import cyberTeeWhite from "@/assets/products/cyber-tee-white.jpg";
import neonBomberBlack from "@/assets/products/neon-bomber-black.jpg";
import techCargoGray from "@/assets/products/tech-cargo-gray.jpg";
import monsterHoodieRed from "@/assets/products/monster-hoodie-red.jpg";
import monsterCapBlack from "@/assets/products/monster-cap-black.jpg";

export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  description: string;
  features: string[];
  sizes: string[];
  colors: { name: string; value: string }[];
  isNew?: boolean;
  isAICustomizable?: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Monster Hoodie",
    price: "$89.99",
    originalPrice: "$119.99",
    image: monsterHoodieBlack,
    category: "hoodies",
    description: "Unleash your inner beast with this premium monster hoodie featuring neon graphics and Japanese-inspired designs.",
    features: [
      "Premium 100% cotton blend",
      "Glow-in-the-dark monster graphics",
      "Japanese kanji detailing",
      "Oversized streetwear fit",
      "Machine washable"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Red", value: "#DC2626" },
      { name: "Purple", value: "#7C3AED" }
    ],
    isNew: true,
    isAICustomizable: true,
    rating: 4.8,
    reviews: 247
  },
  {
    id: 2,
    name: "Cyber Tee",
    price: "$39.99",
    originalPrice: "$54.99",
    image: cyberTeeWhite,
    category: "t-shirts",
    description: "Cyberpunk-inspired t-shirt with holographic monster design and futuristic aesthetics.",
    features: [
      "Soft organic cotton",
      "Holographic print technology",
      "Cyberpunk monster design",
      "Comfortable regular fit",
      "Eco-friendly materials"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Black", value: "#000000" },
      { name: "Neon Green", value: "#10B981" }
    ],
    isNew: false,
    isAICustomizable: true,
    rating: 4.6,
    reviews: 183
  },
  {
    id: 3,
    name: "Neon Bomber",
    price: "$159.99",
    image: neonBomberBlack,
    category: "jackets",
    description: "Premium bomber jacket with electrifying neon embroidery and monster-inspired design elements.",
    features: [
      "Water-resistant fabric",
      "Neon embroidered details",
      "Ribbed cuffs and hem",
      "Multiple pockets",
      "Premium YKK zippers"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Navy", value: "#1E40AF" },
      { name: "Olive", value: "#65A30D" }
    ],
    isNew: true,
    isAICustomizable: false,
    rating: 4.9,
    reviews: 91
  },
  {
    id: 4,
    name: "Tech Cargo Pants",
    price: "$79.99",
    image: techCargoGray,
    category: "pants",
    description: "Futuristic cargo pants with monster patches and techwear-inspired functionality.",
    features: [
      "Durable ripstop fabric",
      "Multiple cargo pockets",
      "Adjustable straps",
      "Monster patch details",
      "Reinforced knees"
    ],
    sizes: ["28", "30", "32", "34", "36", "38", "40"],
    colors: [
      { name: "Gray", value: "#6B7280" },
      { name: "Black", value: "#000000" },
      { name: "Olive", value: "#65A30D" }
    ],
    isNew: false,
    isAICustomizable: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 5,
    name: "Monster Hoodie Red",
    price: "$89.99",
    image: monsterHoodieRed,
    category: "hoodies",
    description: "Bold red monster hoodie with striking black graphics and Japanese street fashion influence.",
    features: [
      "Premium cotton fleece",
      "Bold monster graphics",
      "Japanese text elements",
      "Kangaroo pocket",
      "Adjustable drawstring hood"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Red", value: "#DC2626" },
      { name: "Black", value: "#000000" },
      { name: "White", value: "#FFFFFF" }
    ],
    isNew: true,
    isAICustomizable: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 6,
    name: "Monster Cap",
    price: "$34.99",
    image: monsterCapBlack,
    category: "accessories",
    description: "Cyberpunk-inspired snapback cap with embroidered monster logo and premium construction.",
    features: [
      "Premium cotton twill",
      "Embroidered monster logo",
      "Adjustable snapback",
      "Structured crown",
      "Flat brim design"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "White", value: "#FFFFFF" },
      { name: "Red", value: "#DC2626" }
    ],
    isNew: false,
    isAICustomizable: false,
    rating: 4.5,
    reviews: 129
  }
];

export const categories = [
  { name: "All", value: "all" },
  { name: "Hoodies", value: "hoodies" },
  { name: "T-Shirts", value: "t-shirts" },
  { name: "Jackets", value: "jackets" },
  { name: "Pants", value: "pants" },
  { name: "Accessories", value: "accessories" }
];