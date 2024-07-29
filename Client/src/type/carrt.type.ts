import { IProduct } from "./products.type";

 
export interface ICart{
    count: number;
    productId: number;
    id: number;
}


export interface ICartList {
    id: number;
    count: number;
    product?: {
      id: number;
      name: string;
      price: string;
      image?: string;
    };
  }