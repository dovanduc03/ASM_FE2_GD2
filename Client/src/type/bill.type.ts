

import { ICartList } from './cart.type';   

// Interface mô tả thông tin cơ bản của một bill
export interface IBill {
  id: string; // ID duy nhất của bill
  name: string; // Tên người nhận
  phone: string; // Số điện thoại người nhận
  address: string; // Địa chỉ người nhận
  info: string; // Thông tin bổ sung
}

// Interface mô tả chi tiết của một bill, bao gồm danh sách các sản phẩm từ giỏ hàng
export interface IBillDetail extends IBill {
  cart: ICartList[]; // Danh sách sản phẩm trong giỏ hàng
  totalPrice: number; // Tổng giá trị của bill
  createdAt: string; // Ngày tạo bill
  status: 'pending' | 'completed' | 'cancelled'; // Trạng thái của bill
}