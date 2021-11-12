export interface Iproduct {
  _id: number;
  name?: string;
  price?: number;
  description?: string;
  image?: string;
  category?: string;
  company?: string;
  colors?: [];
  featured?: boolean;
  freeShipping?: boolean;
  inventory?: number;
  averageRating?: number;
  numOfReviews?: number;
  user?: number;
}
