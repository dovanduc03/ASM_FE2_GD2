import axios from "axios";
import { IProduct } from "../type/products.type";
import { http } from "./http";

// Đảm bảo tất cả các yêu cầu API đều sử dụng cùng một đường dẫn
const BASE_URL = '/products';

// Tạo sản phẩm
const createProducts = ({
  data,
}: {
  data: Omit<IProduct, "id">;
}) => http.post(`${BASE_URL}`, data);

// Lấy danh sách sản phẩm
const productList1 = async () => await http.get<IProduct[]>(`${BASE_URL}`);

// Lấy thông tin sản phẩm theo ID
const getOneProduct = (id: string) => http.get<IProduct>("products/" + id);


// Xóa sản phẩm theo ID
const deleteProducts = ({ id }: { id: string }) =>
  http.delete(`${BASE_URL}/${id}`);

// Cập nhật sản phẩm theo ID
export async function updateProducts({ body, id }: { body: FormData; id: string }) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}

export {
  createProducts,
  deleteProducts,
  productList1,
  getOneProduct
};
