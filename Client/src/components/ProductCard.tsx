import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IProduct } from '../type/products.type';
import { getOneProduct } from '../api/productApi';
import { toast } from 'react-toastify';
import { addtoCartUser } from '../api/cart';

interface Props {
  product: IProduct; // Đặt giá trị mặc định là `undefined`
}

const ProductCard: FunctionComponent<Props> = ({ product }) => {
  // Kiểm tra xem product có tồn tại không trước khi render
  if (!product) {
    return <div>Product not found</div>;
  };
  const { id } = useParams(); // Sử dụng useParams bên trong hàm component
  const idParams = id as string;
  const imageRef = useRef<HTMLImageElement>(null);
  const [getproduct, setProductList] = useState<IProduct>();
  const [buyCount, setBuyCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await getOneProduct(idParams);
        if (!result.data) {
          return toast.error("Không tìm thấy sản phẩm");
        }
        setProductList(result.data);
      } catch (error: any) {
        
      }
    };

    fetchProduct();
  }, [idParams]);

  const addToCart = (buyCount: number, idPro: number) => {
    addtoCartUser(buyCount, idPro)
      .then(() => toast.success("Đặt hàng thành công"))
      .catch((error) => toast.error(error.message));
  };
  
  const handleAddToCart = () => {
    if (product && product.id) {
      addToCart(buyCount, +product.id); // Sử dụng product.id ở đây
    } else {
      toast.error("Sản phẩm không hợp lệ");
    }
  };

  return (
    <div className="w-[285px] flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border relative gap-[16px] text-left text-base text-color-white font-poppins">
      <div className="relative group">
        <Link to={`/product/${product.id}`}>
          <img
            className="h-[301px] w-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            loading="lazy"
            alt="Product"
            src={product.image || '/path/to/placeholder.jpg'}
          />
        </Link>
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
          <div className="text-white font-semibold text-lg mb-4">New</div>
          <button className="bg-white text-black border border-black py-2 px-4 rounded-full"
          onClick={handleAddToCart}
            >
            Add to cart
          </button>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-1">
              <img className="w-4 h-4" alt="Share" src="/gridiconsshare.svg" />
              <span>Share</span>
            </div>
            <div className="flex items-center gap-1">
              <img className="w-4 h-4" alt="Compare" src="/comparesvgrepocom-1.svg" />
              <span>Compare</span>
            </div>
            <div className="flex items-center gap-1">
              <img className="w-4 h-4" alt="Like" src="/heart.svg" />
              <span>Like</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start p-4 text-color-gray-1">
        <h3 className="text-xl font-semibold mb-2">
          {product.name}
        </h3>
        <div className="text-base mb-2">
          Outdoor bar table and stool
        </div>
        <div className="text-xl font-semibold">
          {product.price}đ
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
