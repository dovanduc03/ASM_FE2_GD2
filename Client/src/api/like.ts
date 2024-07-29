
import { ILikeList } from "../type/Like.type";
import { http } from "./http";
export const getCartLike = async () => {
    return await http.get<ILikeList[]>("likes?_expand=product");
  };
  export const addtoLikeUser = async (idProduct: number) => {
    return http.post<{ idProduct: number }>("likes", {
      productId: idProduct,
    });
  };
  export const deleteLike = async (id: number) => {
    return await http.delete<ILikeList>("likes/" + id);
  };