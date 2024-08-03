import { ILikeList } from "../type/Like.type";
import { http } from "./http";

export const getCartLike = async () => {
  return await http.get<ILikeList[]>("likes?_expand=product");
};

export const addtoLikeUser = async (idProduct: number) => {
  const response = await http.post<ILikeList>("likes", {
    productId: idProduct,
  });
  return response.data.id; // Đảm bảo trả về ID của mục yêu thích
};

export const deleteLike = async (id: number) => {
  return await http.delete(`likes/${id}`);
};
