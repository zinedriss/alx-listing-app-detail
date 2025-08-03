// constants/index.ts

import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "ocean-breeze-villa",
    name: "Ocean Breeze Villa",
    rating: 4.9,
    reviewsCount: 120,
    address: {
      city: "Malibu",
      country: "USA",
    },
    image: "https://i.ibb.co/6y405c6/main-villa.jpg",
    images: [
      "https://i.ibb.co/2krpns8/villa-pool.jpg",
      "https://i.ibb.co/bFMRd2L/villa-living.jpg",
      "https://i.ibb.co/zscC5jM/villa-bedroom.jpg",
      "https://i.ibb.co/yYv3jSW/villa-view.jpg",
    ],
    description:
      "Experience the pinnacle of luxury at Ocean Breeze Villa. This stunning property offers breathtaking ocean views, a private infinity pool, and state-of-the-art amenities. Perfect for a serene getaway or a lavish holiday with family and friends. Every detail has been curated for your comfort and enjoyment.",
    category: ["WiFi", "Kitchen", "Pool", "Free parking", "Air conditioning", "TV"],
    price: 450,
    host: {
      name: "Jane Doe",
      avatar: "https://i.ibb.co/z7qY2Ym/host-avatar.jpg",
      about: "As a host with over 10 years of experience in luxury hospitality, I am dedicated to providing my guests with an unforgettable stay. I'm passionate about design, comfort, and creating a welcoming atmosphere. I am available 24/7 to assist with any needs you may have during your visit."
    },
    reviews: [
      {
        name: "Alice Johnson",
        rating: 5,
        avatar: "https://i.ibb.co/0j2gWz2/avatar-1.jpg",
        comment: "Absolutely breathtaking! The views are even better in person. The villa was immaculate and the host was incredibly accommodating. A 5-star experience all around.",
      },
      {
        name: "Mark Roberts",
        rating: 4.8,
        avatar: "https://i.ibb.co/PN4H8Y7/avatar-2.jpg",
        comment: "A fantastic place to unwind. The infinity pool is a highlight. We had a wonderful time and would definitely come back. Minor issue with the Wi-Fi but it was resolved quickly.",
      },
    ],
  },
  // Add other properties here if needed
];