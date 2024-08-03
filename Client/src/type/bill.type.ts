import { ICartList } from "./carrt.type";

export interface IBill {
    id? : number;
    name: string;
    address: string;
    zipCode: string;
    phone: number;
    info: string;
    paymentMethod: string; 
    createdAt?: string; 
  }

export interface IBillList {
  id: number;
  name: string;
  address: string;
  zipCode: string;
  phone: number;
  info: string;
  createdAt: string;
  paymentMethod: string;
  cartlist: ICartList[];
  }