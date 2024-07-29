import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { getCartList } from "../../api/cart";
import { ICartList } from "../../type/carrt.type";

const Tinhtonghdct: FunctionComponent = () => {
  const [cartList, setCartList] = useState<ICartList[]>([]);

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

  return (
    <div className="flex-1 bg-color-white flex flex-col items-start justify-start pt-[87px] pb-[86px] pr-[37px] pl-[38px] box-border gap-[33.5px] min-w-[395px] max-w-full z-[1] text-left text-5xl text-black font-poppins">
      {/* Tiêu đề sản phẩm */}
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
        <div className="flex flex-col items-start justify-start gap-[14px]">
          <h3 className="m-0 text-inherit font-medium">Product</h3>
        </div>
        <div className="flex flex-row items-start justify-end">
          <h3 className="m-0 text-inherit font-medium">Subtotal</h3>
        </div>
      </div>

      {/* Nội dung sản phẩm */}
      {cartList.length > 0 ? (
        cartList.map(cart => {
          const subtotal = (parseFloat(cart.product?.price || '0') * cart.count).toFixed(0);
          return (
            <div key={cart.id} className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="flex flex-col items-start justify-start gap-[14px]">
                <div className="flex flex-row items-start text-base">
                  <div className="flex flex-col gap-[22px]">
                    <div className="flex flex-row items-start gap-[10.5px] text-xs">
                      <div className="text-base text-darkgray product-name">
                        {cart.product?.name || 'Unknown Product'}
                      </div>
                      <div>X</div>
                      <div>{cart.count}</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Đẩy subtotal sang bên phải */}
              <div className="w-[154px] flex flex-col items-end justify-start gap-[14px] text-base">
                <div className="flex flex-row items-end justify-end">
                  <div>{subtotal}₫</div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No items in the cart.</p>
      )}

      {/* Hiển thị tổng cộng và nút "Place order" */}
      <div className="flex flex-col items-center justify-center gap-[14px] text-base">
        {/* Tổng cộng */}
        <div className="text-center">
          <h1 className="m-0 text-inherit font-medium">Total</h1>
          <b className="text-5xl text-primary">
            {totalCurrentPurchasePrice.toFixed(0)}₫
          </b>
        </div>

        {/* Nút "Place order" */}
        <div className="flex justify-center">
          <button className="py-[15px] px-5 bg-transparent w-[400px] rounded-mini border-[1px] border-black hover:bg-darkslategray-300 hover:border-darkslategray-100">
            <div className="text-xl font-poppins text-black">Place order</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tinhtonghdct;
