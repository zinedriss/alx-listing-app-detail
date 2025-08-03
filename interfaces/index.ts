// interfaces/index.ts

// No changes needed here, but ensure it exists and is correct.
export interface AddressProps {
  city: string;
  country: string;
}

export interface ReviewProps {
  avatar: string;
  name:string;
  rating: number;
  comment: string;
}

export interface HostProps {
  name: string;
  avatar: string;
  about: string;
}

export interface PropertyProps {
  name: string; // The primary identifier as per instructions
  rating: number;
  reviewsCount: number;
  address: AddressProps;
  image: string;
  images: string[];
  description: string;
  category: string[]; // Amenities
  price: number;
  reviews: ReviewProps[];
  host: HostProps;
}