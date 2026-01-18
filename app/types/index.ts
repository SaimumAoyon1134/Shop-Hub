export interface Item {
  id: string;
  _id?: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  count?: number;
  error?: string;
}
