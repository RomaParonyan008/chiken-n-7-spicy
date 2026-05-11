export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category:
    | "burgers"
    | "chicken"
    | "wings"
    | "fries"
    | "sides"
    | "wraps"
    | "kids"
    | "drinks";
  image: string;
  spiceLevel?: number;
  availableCustomizations?: string[];
}

export const products: Product[] = [
  // Sauces
  {
    id: "signature-sauce-50",
    name: "Signature Sauce",
    description: "Our house specialty sauce (50g)",
    basePrice: 350,
    category: "sides",
    image: "",
  },
  {
    id: "signature-sauce-250",
    name: "Signature Sauce",
    description: "Our house specialty sauce (250g)",
    basePrice: 550,
    category: "sides",
    image: "",
  },
  {
    id: "cheese-sauce-50",
    name: "Cheese Sauce",
    description: "Rich creamy cheese sauce (50g)",
    basePrice: 350,
    category: "sides",
    image: "",
  },
  {
    id: "honey-30",
    name: "Honey",
    description: "Sweet honey drizzle (30g)",
    basePrice: 350,
    category: "sides",
    image: "",
  },
  {
    id: "white-garlic-sauce-50",
    name: "White Garlic Sauce",
    description: "Creamy garlic sauce (50g)",
    basePrice: 350,
    category: "sides",
    image: "",
  },

  // Sides
  {
    id: "mac-cheese",
    name: "Mac N' Cheese",
    description: "Creamy mac and cheese with melted cheddar",
    basePrice: 1250,
    category: "sides",
    image:
      "https://lh3.googleusercontent.com/food/AMHwXNrWrnYF0ZPdJaEN12ZfZjoKRLwS_cgUhUjHx1b0bTU29Ps8twIYa3jF-E4L6gTNz1Rzv5vTPU_kxLCNvmp3lnLAjjWZJhY4WdzvpXnV8R4CMLFEReQMIQHimSu62U8lgV8bBAH_NLGbII4qwtdd46Es_CcjNeZCOG9UQOw7KeM=s125-w125-h125-n-e1-rw-k-v1-no",
  },
  {
    id: "mac-cheese-chicken",
    name: "Mac N' Cheese with Chicken",
    description: "Mac and cheese loaded with crispy chicken bits",
    basePrice: 1650,
    category: "sides",
    image:
      "https://lh3.googleusercontent.com/food/AMHwXNoFIJjZwynAZuv1RmOKPFHmR1wUry9_RMvKgXliRJWY0V-Vyq7dRu0YLRTUHZfzlhvnx4O9tvbnUYmEMsTVT91AMzmfXFLAGr6pGalLBmQbeDFc3gPOeqFoSwI1GClsHwhzu3B0mKrUJdxTdap0gujdw9_3RtezyRkh0ISIQQQ=s125-w125-h125-n-e1-rw-k-v1-no",
  },

  // Salads
  {
    id: "coleslaw",
    name: "Coleslaw",
    description: "Creamy homemade coleslaw",
    basePrice: 750,
    category: "sides",
    image:
      "https://lh3.googleusercontent.com/food/AMHwXNp_gMeJ2hsxQj1i9CumVkGRGqcWOas-K1jU4fHsoxh9ivyugy9vNTLU0fRnCFIvfn5v_hIN0H5clWVXlgxWR__ALQ6KOFlKEIzMavfdt8G4bfrYG89B9TH-PKlEK6Ul_QjxGPi7vuvWQUVxY3BjPV61Xk7Ma_Y0jnpJq_dkng=s125-w125-h125-n-e1-rw-k-v1-no",
  },
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    description: "Fresh romaine with caesar dressing and croutons",
    basePrice: 1250,
    category: "sides",
    image:
      "https://lh3.googleusercontent.com/food/AMHwXNpXrSLqRE5sARRJKUYjTQzuNaJqIXDTHl7p8NbHCk7c6S8Xfo5kyRTHpz91oTrwm3nnz3AXoduN_SiD65eQLLVl8b_94aByC3ya8afMzbx4wgL-NhxkKunYPD3ij18S244bIekyyzIc91pExpgZ1FeLJUC3t19fSsglnj-0Zpg=s125-w125-h125-n-e1-rw-k-v1-no",
  },

  // Extras
  {
    id: "cheese-balls",
    name: "Cheese Balls",
    description: "Crispy cheese balls with dipping sauce",
    basePrice: 1250,
    category: "sides",
    image: "",
  },
  {
    id: "breaded-pickles",
    name: "Breaded Pickles",
    description: "Crispy breaded pickle slices",
    basePrice: 550,
    category: "sides",
    image: "",
  },

  // Main Dishes - Quesadilla
  {
    id: "chicken-quesadilla",
    name: "Chicken Quesadilla",
    description: "Crispy chicken quesadilla with cheese and spicy dip",
    basePrice: 1650,
    category: "chicken",
    image:
      "https://lh3.googleusercontent.com/food/AMHwXNpPSTjuNyQuuHg76m4Ogx_8u7OJK9cxta0QAH55f8jqXx-S7ljSiof-prX4Rvhz7XjA1FXw41R2huV8NHz_pIep5O3qKHZJmoqlY5IprzB-BWRNhjarhtyn-OyXcCtVCh80opH7N8hci11xvdO2Zd-8oMXjvAhjiZTz7X4EfQ=s125-w125-h125-n-e1-rw-k-v1-no",
  },

  // Main Dishes - Spicy Series
  {
    id: "spicy-1",
    name: "Spicy 1",
    description: "Mild heat crispy chicken with our signature sauce.",
    basePrice: 3350,
    category: "burgers",
    image:
      "https://lh3.googleusercontent.com/food/AMHwXNpucCz1GqdJ1iyS2u4bWQNGO_7YZ33ImjKF-maKlMawfinmZPGz57uSD2bI056jP3_1rtll82Iea2_-aAmWMP77n8NQ_4FCDUCOyKyoxasOV1R0ymI-Dp2gdqkYWCyjAcvgzD9UvEFpph29IeO7_lwgHSGKacVtuW76AH_qEyM=s125-w125-h125-n-e1-rw-k-v1-no",
    spiceLevel: 1,
  },
  {
    id: "spicy-2",
    name: "Spicy 2",
    description: "Light heat crispy chicken with jalapeños.",
    basePrice: 3350,
    category: "burgers",
    image:
      "https://lh3.googleusercontent.com/food/AMHwXNrIdZtzRlPprKUfdrVMgBqX_YMCO51ufCpySOAuOylgx6MeKG__f7c81DpKoG3F6W5ElmeeFK7eZGAcIjQpQBaDl8IRpcq2n0kEEPWCVFzktDyYpl7DtgBOyoqoMYUeMC5KY3hIhNOyfy-tE_b14zKw22KkPZOLlUyp9QNrqw=s1360-w1360-h1020-rw",
    spiceLevel: 2,
  },
  {
    id: "spicy-3",
    name: "Spicy 3",
    description: "Medium heat crispy chicken with habanero sauce.",
    basePrice: 3350,
    category: "burgers",
    image:
      "https://lh3.googleusercontent.com/food/AMHwXNomvKDya4dCwFtz7qEm2QNGLbZd_yXv0ewSOSDjCJ99haDJtOUswvLRVB0b2ObjmyjrN8RLZGVbpYf0Cr-m3X7d9bvREAbJJkItSIyKtKsTfVhbl2Bl-nTY4GdYdJKueM8wGYOy5f4OSp6b_Uj7cGa8aiL0-SKORh8rDLmw5g=s125-w125-h125-n-e1-rw-k-v1-no",
    spiceLevel: 3,
  },
  {
    id: "spicy-4",
    name: "Spicy 4",
    description: "Hot crispy chicken with ghost pepper glaze.",
    basePrice: 2150,
    category: "burgers",
    image:
      "https://lh3.googleusercontent.com/food/AMHwXNpoKZrmCtUTBnrxhyMvqEnRNR_EucIkb1pi-EhTfxG3J9Cq7MzGHcv4SnpNYevv-7nyeyCFMj1mqJF4so1j88g63fK92rKPzsklpoRiKNgvOCL-VzdkWqgQe6J5HPrcYmAXQzs2sB4H2hQpJpHMklWe3tVexdeZyY-mdihsF-U=s125-w125-h125-n-e1-rw-k-v1-no",
    spiceLevel: 4,
  },
  {
    id: "spicy-5",
    name: "Spicy 5",
    description: "Extreme heat crispy chicken. Only for spice lovers!",
    basePrice: 2150,
    category: "burgers",
    image:
      "https://lh3.googleusercontent.com/food/AMHwXNqv-qi9S8Sjykd75un3SlXMglNOZrn52Ttbh_fW50I39m-TQzqynVdPqWZrn11FsdFzC4w3RS8D_C71DUFedN6lbglmW_F_SZ8JmgqitNaZkp1fAqAu-1Ol3uTnLdOTVV6Oy-kYValKrKeWtk4XzLCbsFGENpA4klp26qfavaw=s125-w125-h125-n-e1-rw-k-v1-no",
    spiceLevel: 5,
  },
  {
    id: "signature-plate",
    name: "Signature Plate",
    description: "Our signature fiery chicken plate with special sauce.",
    basePrice: 2450,
    category: "burgers",
    image: "",
    spiceLevel: 4,
  },

  // Drinks
  {
    id: "jermuk",
    name: "Jermuk",
    description: "Mineral water from Jermuk",
    basePrice: 350,
    category: "drinks",
    image: "",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    description: "Classic Coca-Cola soft drink",
    basePrice: 500,
    category: "drinks",
    image: "",
  },
  {
    id: "fanta",
    name: "Fanta",
    description: "Fanta orange soft drink",
    basePrice: 500,
    category: "drinks",
    image: "",
  },
  {
    id: "sprite",
    name: "Sprite",
    description: "Refreshing lemon-lime soda",
    basePrice: 500,
    category: "drinks",
    image: "",
  },
  {
    id: "dobry-juice",
    name: "Dobry Juice",
    description: "Mixed fruit juice",
    basePrice: 500,
    category: "drinks",
    image: "",
  },
  {
    id: "byuregh-water",
    name: "Byuregh Water",
    description: "Natural mineral water",
    basePrice: 300,
    category: "drinks",
    image: "",
  },

  // Combos
  {
    id: "spicy-party-1",
    name: "Spicy Party #1",
    description: "Double patty mild spice burger combo for sharing.",
    basePrice: 9350,
    category: "burgers",
    image:
      "https://lh3.googleusercontent.com/food/AMHwXNrapV6wwEWoIcEf3qkox__2JzPclQCxMIQ7_KMbLxv_AdU9amkT9o4K1pZ1NYISrJimrjgKFq_HOY0cO0e4mlcQqZqGnU_WJuyCybrek28QcYHdbW8rdfVXmIaNoYJJS6JWWfZK-XdVJkJaL3MfQmP3oU6bIvztk_kFx4H-70Q=s125-w125-h125-n-e1-rw-k-v1-no",
    spiceLevel: 1,
  },
  {
    id: "spicy-party-2",
    name: "Spicy Party #2",
    description: "Double patty medium spice burger combo for sharing.",
    basePrice: 9350,
    category: "burgers",
    image:
      "https://lh3.googleusercontent.com/food/AMHwXNoyJinwcv049U6HvlgbYMsaiH144akj2WsDEQmQuwDV1RFzP16YaAAlT6qfg7gmY04IRrrehNAdkvKbsTqpcyQJT0Bmrw3vxJjhicr8MZFbxCKUfiUZ-n9wTABxRAZlR7tTgExhdVWQwHwch5tlHMQzlNIUgrtJnNfff_yWff4=s125-w125-h125-n-e1-rw-k-v1-no",
    spiceLevel: 2,
  },

  // Kids Menu
  {
    id: "berry-jelly",
    name: "Berry Jelly",
    description: "Delicious berry flavored jelly",
    basePrice: 950,
    category: "kids",
    image: "",
  },
  {
    id: "tropical-jelly",
    name: "Tropical Jelly",
    description: "Tropical fruit flavored jelly",
    basePrice: 950,
    category: "kids",
    image: "",
  },
  {
    id: "citrus-jelly",
    name: "Citrus Jelly",
    description: "Refreshing citrus flavored jelly",
    basePrice: 950,
    category: "kids",
    image: "",
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    description: "Kid-sized crispy chicken burger with fries",
    basePrice: 1250,
    category: "kids",
    image: "",
  },
  {
    id: "chicken-bites",
    name: "Chicken Bites",
    description: "Crispy chicken bites perfect for kids",
    basePrice: 1250,
    category: "kids",
    image: "",
  },
  {
    id: "chicken-nuggets",
    name: "Chicken Nuggets",
    description: "4 crispy chicken nuggets with fries",
    basePrice: 1250,
    category: "kids",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&h=600&fit=crop",
  },
  {
    id: "chicken-soup",
    name: "Chicken Soup",
    description: "Warm and comforting chicken soup",
    basePrice: 950,
    category: "kids",
    image: "",
  },
  {
    id: "kids-mac-cheese",
    name: "Mac N' Cheese",
    description: "Creamy mac and cheese for kids",
    basePrice: 1250,
    category: "kids",
    image:
      "https://lh3.googleusercontent.com/food/AMHwXNrWrnYF0ZPdJaEN12ZfZjoKRLwS_cgUhUjHx1b0bTU29Ps8twIYa3jF-E4L6gTNz1Rzv5vTPU_kxLCNvmp3lnLAjjWZJhY4WdzvpXnV8R4CMLFEReQMIQHimSu62U8lgV8bBAH_NLGbII4qwtdd46Es_CcjNeZCOG9UQOw7KeM=s125-w125-h125-n-e1-rw-k-v1-no",
  },
  {
    id: "kids-mac-cheese-chicken",
    name: "Mac N' Cheese with Chicken",
    description: "Mac and cheese loaded with crispy chicken bits",
    basePrice: 1650,
    category: "kids",
    image:
      "https://lh3.googleusercontent.com/food/AMHwXNoFIJjZwynAZuv1RmOKPFHmR1wUry9_RMvKgXliRJWY0V-Vyq7dRu0YLRTUHZfzlhvnx4O9tvbnUYmEMsTVT91AMzmfXFLAGr6pGalLBmQbeDFc3gPOeqFoSwI1GClsHwhzu3B0mKrUJdxTdap0gujdw9_3RtezyRkh0ISIQQQ=s125-w125-h125-n-e1-rw-k-v1-no",
  },
  {
    id: "fries",
    name: "Fries",
    description: "Classic crispy french fries",
    basePrice: 750,
    category: "kids",
    image:
      "https://lh3.googleusercontent.com/food/AMHwXNoUHEr5jP5UD6WkfkiV6heDqhpCtVbx0igBQwiSU10TnOwKcZPfS3shXh3crhpBHE9nFWEpjQWNIQzZsEnjsXmhNPP_TOcMTGluyPkL_XsiqKKHVMwTzVb4yNrNW7T7kMY1MzzsLBogDlb2-OELN9QlPz7XGYYsKpJ-89wZHd0=s125-w125-h125-n-e1-rw-k-v1-no",
  },
  {
    id: "sweet-salad",
    name: "Sweet Salad",
    description: "Kid-friendly sweet salad with fresh fruits",
    basePrice: 950,
    category: "kids",
    image: "",
  },
];

export const spiceLevelNames: Record<number, string> = {
  0: "No Spice",
  1: "Mild",
  2: "Light",
  3: "Medium",
  4: "Hot",
  5: "Very Hot",
  6: "Extreme",
  7: "Death Zone",
};

export const categories = [
  { id: "all", label: "All" },
  { id: "burgers", label: "Burgers" },
  { id: "chicken", label: "Chicken" },
  { id: "wings", label: "Wings" },
  { id: "fries", label: "Fries" },
  { id: "sides", label: "Sides" },
  { id: "wraps", label: "Wraps" },
  { id: "drinks", label: "Drinks" },
  { id: "kids", label: "Kids" },
] as const;
