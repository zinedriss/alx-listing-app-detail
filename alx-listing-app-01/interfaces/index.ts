// interfaces/index.ts

export interface AddressProps {
  city: string;
  country: string;
}

export interface ReviewProps {
  avatar: string;
  name: string;
  rating: number;
  comment: string;
}

export interface HostProps {
  name: string;
  avatar: string;
  about: string;
}

export interface PropertyProps {
  id: string;
  name: string;
  rating: number;
  reviewsCount: number;
  address: AddressProps;
  image: string; // The main image
  images: string[]; // A list of additional images for the grid
  description: string;
  category: string[]; // Represents amenities
  price: number;
  reviews: ReviewProps[];
  host: HostProps;
}