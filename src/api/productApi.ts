import axios from "axios";
import { IProduct } from "../type/products.type";
import { http } from "./http";
const createProducts = ({
  data,
}: {
  data: Omit<IProduct, "id"  >;
}) => http.post("products", data);

const productList1 = async () => await http.get<IProduct[]>(`products`);

export async function getOneProduct(id: string): Promise<{ data: IProduct }> {
  const response = await fetch(`/api/products/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json(); // Trả về dữ liệu bao bọc trong thuộc tính data nếu cần
}


const deleteProducts = ({ id }: { id: string }) =>
  http.delete("products/" + id, {});

export async function updateProducts({ body, id }: { body: FormData; id: string }) {
  const response = await fetch(`/api/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body), // Chuyển đổi dữ liệu thành JSON
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
};
