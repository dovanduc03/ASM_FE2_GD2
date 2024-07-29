import React, { useEffect, useMemo, useState, FunctionComponent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteCart, descCount, getCartList } from '../../api/cart';

import Header from '../../components/Header';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  IconButton,
  Input,
  Paper,
  Typography,
} from '@mui/material';
import Features from '../../components/ingredient/Features';
import { ICartList } from '../../type/carrt.type';

const CartList: FunctionComponent = () => {
  const [cartList, setCartList] = useState<ICartList[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCartList().then(({ data }) => setCartList(data));
  }, []);

  // Tính tổng giá trị mua hàng hiện tại
  const totalCurrentPurchasePrice = useMemo(() => {
    const groupedById = cartList.reduce((acc, item) => {
      if (item.product && item.product.id) {
        const id = item.product.id;
        const price = parseFloat(item.product.price) || 0;
        const count = Number(item.count) || 0;

        if (!acc[id]) {
          acc[id] = { total: 0, price };
        }

        acc[id].total += count;
      }
      return acc;
    }, {} as Record<number, { total: number; price: number }>);

    return Object.values(groupedById).reduce((total, item) => {
      const { total: count, price } = item;
      return total + (count * price);
    }, 0);
  }, [cartList]);

  const handleDeleteCart = (id: number) => {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirmDelete) {
      setCartList(cartList.filter((item) => item.id !== id));
      deleteCart(id).then(() => {
        toast.success('Xóa thành công');
      });
    }
  };

  const handleDescByCount = (id: number) => {
    setCartList((prevCartList) => {
      return prevCartList.map((item) => {
        if (item.id === id && item.count > 1) {
          const updatedCount = item.count - 1;
          descCount(updatedCount, id).then(() => {});
          return { ...item, count: updatedCount };
        }
        return item;
      });
    });
  };

  const handleOnChangeInput = (value: number | string, id: number) => {
    const newCount = Number(value);

    setCartList((prevCartList) => {
      return prevCartList.map((item) => {
        if (item.id === id) {
          descCount(newCount, id).then(() => {});
          return { ...item, count: newCount };
        }
        return item;
      });
    });
  };

  const handleAscByCount = (id: number) => {
    setCartList((prevCartList) => {
      return prevCartList.map((item) => {
        if (item.id === id) {
          const updatedCount = item.count + 1;
          descCount(updatedCount, id).then(() => {});
          return { ...item, count: updatedCount };
        }
        return item;
      });
    });
  };

  const handleProceedToCheckout = () => {
    navigate('/cart/checkout');
  };

  return (
    <div className="w-full relative bg-color-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[50px] box-border leading-[normal] tracking-[normal]">
      <Header />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[22px] box-border max-w-full">
        <div className="self-stretch flex flex-col items-center justify-start pt-[61px] pb-[97px] pr-[25px] pl-5 relative gap-[1px] text-left text-29xl text-black font-poppins">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
            <img className="w-full h-full overflow-hidden object-contain absolute left-[0px] top-[0px] [transform:scale(1.038)]" alt="" src="/placeholder@2x.png" />
          </div>
          <div className="w-[115px] flex flex-row items-start justify-end py-0 pr-0.5 pl-[7px] box-border">
            <div className="h-[133px] flex-1 relative">
              <h1 className="m-0 absolute top-[61px] left-[0px] text-inherit font-medium font-inherit inline-block min-w-[106px] z-[1] mq1050:text-19xl mq450:text-10xl">Cart</h1>
              <img className="absolute top-[0px] left-[15px] w-[77px] h-[77px] object-cover z-[1]" alt="" src="/meubel-house-logos05-1@2x.png" />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[6px] text-base">
            <div className="relative font-medium inline-block min-w-[48px] z-[1]">
              <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>Home</Link>
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img className="w-5 h-5 relative overflow-hidden shrink-0 object-contain z-[1]" loading="lazy" alt="" src="/dashiconsarrowdownalt2@2x.png" />
            </div>
            <div className="relative font-light inline-block min-w-[35px] z-[1]">Cart</div>
          </div>
        </div>
        
        <div className="self-stretch bg-color-white flex flex-col items-start justify-start pt-[72px] px-[50px] pb-[63px] box-border gap-[30px] max-w-full text-left text-base text-black font-poppins lg:flex-wrap mq750:gap-[15px] mq750:pt-[47px] mq750:px-[50px] mq750:pb-[41px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="self-stretch bg-linen-200 overflow-x-auto flex flex-row items-center justify-between pt-4 pb-4 px-4 gap-4 z-[1]">
            <div className="flex-1 font-medium text-left">Product</div>
            <div className="w-[100px] font-medium text-left">Price</div>
            <div className="w-[100px] font-medium text-left">Quantity</div>
            <div className="w-[100px] font-medium text-left">Subtotal</div>
            <div className="w-[100px] font-medium text-left">Action</div>
          </div>
          
          {/* Hiển thị danh sách sản phẩm */}
          {cartList.length > 0 ? (
            cartList.map((cart) => (
              <div key={cart.id} className="self-stretch flex flex-row items-center justify-between py-4 px-4 gap-4">
                <div className="flex-1 flex items-center gap-2">
                  <img className="h-16 w-16 object-cover cursor-pointer" alt="" src={cart.product?.image || '/default-image.png'} />
                  <span>{cart.product?.name || 'Unknown Product'}</span>
                </div>
                <div className="w-[100px] text-left">{cart.product?.price || 'N/A'}₫</div>
                <div className="w-[100px] flex items-center justify-center gap-2 border border-darkgray p-1 rounded">
                  <IconButton size="small" onClick={() => handleDescByCount(cart.id)}>
                    <RemoveIcon />
                  </IconButton>
                  <span>{cart.count}</span>
                  <IconButton size="small" onClick={() => handleAscByCount(cart.id)}>
                    <AddIcon />
                  </IconButton>
                </div>
                <div className="w-[100px] text-left">
                  {cart.product?.price && cart.count ? (parseFloat(cart.product.price) * cart.count).toFixed(0) : '0'}₫
                </div>
                <div className="w-[100px] text-left">
                  <IconButton size="small" onClick={() => handleDeleteCart(cart.id)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            ))
          ) : (
            <Typography variant="h6" color="textSecondary" className="text-center w-full">
              Your cart is empty.
            </Typography>
          )}
          
          <div className="self-stretch bg-linen-200 overflow-x-auto flex flex-row items-center justify-center pt-4 pb-4 px-4 gap-4 z-[1]">
            <div className="relative text-xl font-medium text-primary inline-block min-w-[125px] z-[1] mq450:text-base">
              Total: {totalCurrentPurchasePrice.toFixed(0)}₫
            </div>
          </div>
          
          <div className="w-full flex flex-row items-center justify-center gap-4">
            <Button
              variant="outlined"
              onClick={() => navigate('/')}
              style={{
                fontSize: '16px', // Kích thước chữ lớn hơn
                padding: '10px 20px', // Padding lớn hơn
                borderRadius: '8px', // Bo tròn góc
                color: 'black', // Màu chữ đen
                backgroundColor: 'white', // Nền trắng
                border: '2px solid black', // Viền đen
              }}
            >
              Continue Shopping
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleProceedToCheckout}
              style={{
                fontSize: '16px', // Kích thước chữ lớn hơn
                padding: '10px 20px', // Padding lớn hơn
                borderRadius: '8px', // Bo tròn góc
                color: 'white', // Màu chữ trắng
                backgroundColor: 'black', // Nền đen
                border: '2px solid black', // Viền đen
              }}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </section>
      <Features />
    </div>
  );
};

export default CartList;
