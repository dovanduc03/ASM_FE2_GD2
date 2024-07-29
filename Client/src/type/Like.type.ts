import { IProduct } from "./products.type";

 
export interface ILike{
    productId: number;
    id: number;
}


export interface ILikeList {
    id: number;
    product?: {
      id: number;
      name: string;
      price: string;
      image?: string;
    };
  }