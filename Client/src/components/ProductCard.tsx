import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IProduct } from '../type/products.type';
import { getOneProduct } from '../api/productApi';
import { toast } from 'react-toastify';
import { addtoCartUser } from '../api/cart';
import { addtoLikeUser, deleteLike } from '../api/like';

interface Props {
  product: IProduct;
}

const ProductCard: FunctionComponent<Props> = ({ product }) => {
  const { id } = useParams();
  const idParams = id as string;
  const [getProduct, setProductList] = useState<IProduct>();
  const [buyCount, setBuyCount] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState<number | null>(null);

  useEffect(() => {
    console.log('Product ID from URL:', idParams); // Kiểm tra giá trị của ID
    if (!idParams || idParams.trim() === '') {
      return;
    }
  
    const fetchProduct = async () => {
      try {
        const result = await getOneProduct(idParams);
        console.log('API response:', result); // Kiểm tra phản hồi từ API
        if (result.data) {
          setProductList(result.data);
          setIsLiked(result.data.isLiked || false);
          if (result.data.likeId) {
            setLikeId(result.data.likeId);
          }
        } else {
          toast.error("Không tìm thấy sản phẩm");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Có lỗi xảy ra khi lấy dữ liệu sản phẩm");
      }
    };
  
    fetchProduct();
  }, [idParams]);

  const addToCart = (buyCount: number, idPro: number) => {
    addtoCartUser(buyCount, idPro)
      .then(() => toast.success("Đặt hàng thành công"))
      .catch((error) => toast.error(`Có lỗi khi thêm sản phẩm vào giỏ hàng: ${error.message}`));
  };

  const handleAddToCart = () => {
    if (product && product.id) {
      addToCart(buyCount, +product.id);
    } else {
      toast.error("Sản phẩm không hợp lệ");
    }
  };

  const handleLikeToggle = async () => {
    if (product && product.id) {
      try {
        if (isLiked) {
          if (likeId !== null) {
            await deleteLike(likeId);
            toast.success("Đã bỏ thích sản phẩm");
            setLikeId(null);
          } else {
            toast.error("ID yêu thích không hợp lệ");
          }
        } else {
          const newLikeId = await addtoLikeUser(+product.id);
          toast.success("Đã thêm sản phẩm vào danh sách yêu thích");
          setLikeId(newLikeId);
        }
        setIsLiked(!isLiked);
      } catch (error) {
        console.error("Lỗi khi chuyển đổi thích:", error);
        toast.error("Có lỗi xảy ra");
      }
    } else {
      toast.error("Sản phẩm không hợp lệ");
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-[285px] flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border relative gap-[16px] text-left text-base text-color-white font-poppins">
      <div className="relative group">
        <img
          className="h-[301px] w-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          loading="lazy"
          alt="Product"
          src={product.image || '/path/to/placeholder.jpg'}
        />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
          <button
            className="bg-white text-black border border-black py-2 px-4 rounded-full"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <div className="flex gap-4 mt-4">
            <button
              style={{ background: 'none', border: 'none', padding: 0 }}
              className="flex items-center gap-1 text-white"
            >
              <img className="w-4 h-4" alt="Share" src="/gridiconsshare.svg" />
              <span className="ml-1">Share</span>
            </button>
            <button
              style={{ background: 'none', border: 'none', padding: 0 }}
              className="flex items-center gap-1 text-white"
            >
              <img className="w-4 h-4" alt="Compare" src="/comparesvgrepocom-1.svg" />
              <span className="ml-1">Compare</span>
            </button>
            <button
              style={{ background: 'none', border: 'none', padding: 0 }}
              className="flex items-center gap-1 cursor-pointer text-white"
              onClick={handleLikeToggle}
            >
              <img
                className="w-4 h-4"
                alt="Like"
                src={isLiked ? '/heart_filled.svg' : '/heart.svg'}
              />
              <span className="ml-1">Like</span>
            </button>
          </div>
        </div>
      </div>

      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
        <div className="flex flex-col items-start justify-start p-4 text-color-gray-1">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <div className="text-base mb-2">Outdoor bar table and stool</div>
          <div className="text-xl font-semibold">{product.price}đ</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
