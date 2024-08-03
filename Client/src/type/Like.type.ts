


export interface ILike{
    productId: number;
    id: number;
    createdAt: string;
    
}


export interface ILikeList {
  id: number; // Ensure id is included
  productId: number;
  createdAt: string;
  product?: {
    id: number;
    name: string;
    price: number;
    image?: string;
  };
}