import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../../components/ProductList";
import { useQuery } from "@tanstack/react-query";

import { productList1 } from "../../api/productApi";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  ;

  // Lấy dữ liệu sản phẩm
  const { data: productsResponse, isLoading } = useQuery({
    queryKey: ['Products'],
    queryFn: () => productList1(), // Giả sử `productList1` trả về danh sách sản phẩm
  });

  const products = productsResponse?.data || []; // Truy cập dữ liệu từ phản hồi của Axios

  return (
    <ProductList/>
  );
};

export default Home;
