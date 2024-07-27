import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../type/products.type';

interface Props {
  product: IProduct | undefined; // Đặt giá trị mặc định là `undefined`
}

const ProductCard: FunctionComponent<Props> = ({ product }) => {
  // Kiểm tra xem product có tồn tại không trước khi render
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between', // Hoặc "center", "space-around", tùy thuộc vào cách bạn muốn dàn đều
        gap: '16px', // Khoảng cách giữa các phần tử
      }}
    >
      <div className="w-[285px] flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border relative gap-[16px] text-left text-base text-color-white font-poppins">
 
        <div className="flex flex-row items-start justify-start relative">
          <Link to={`/product/${product.id}`}>
            <img
              className="h-[301px] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt="Product"
              src={product.image || '/path/to/placeholder.jpg'}
            />
          </Link>
          <div className="h-12 w-12 absolute !m-[0] top-[24px] right-[24px] z-[1]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] hidden">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-color-red-accents" />
              <div className="absolute top-[25%] left-[10.42%] leading-[150%] font-medium">
                -50%
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-full h-full">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-color-green-accents w-full h-full" />
              <div className="absolute top-[12px] left-[8px] leading-[150%] font-medium inline-block min-w-[35px] z-[1]">
                New
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-4 text-5xl text-color-gray-1">
          <div className="flex flex-col items-start justify-start gap-[8px] z-[1]">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <h3 className="m-0 relative text-inherit leading-[29px] font-semibold font-inherit inline-block min-w-[93px] mq450:text-lgi mq450:leading-[23px]">
                {product.name}
              </h3>
              <div className="relative text-base leading-[150%] font-medium text-color-gray-3">
                Outdoor bar table and stool
              </div>
            </div>
            <div className="flex flex-row items-start justify-start text-xl">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <div className="relative leading-[150%] font-semibold inline-block min-w-[101px] mq450:text-base mq450:leading-[24px]">
                  {product.price}đ
                </div>
                <div className="w-[107px] relative text-base [text-decoration:line-through] leading-[150%] text-color-gray-4 hidden whitespace-nowrap">
                  Rp 14.000.000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[446px] relative hidden z-[3] text-color-primary">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-color-gray-1 opacity-[0.72]" />
          <div className="absolute top-[175px] left-[calc(50%_-_126.5px)] flex flex-col items-center justify-center gap-[24px]">
            <div className="w-[202px] h-12 relative">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-color-white" />
              <div className="absolute top-[12px] left-[59px] leading-[150%] font-semibold">
                Add to cart
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[20px] text-color-white">
              <div className="h-6 flex flex-row items-center justify-center gap-[2px]">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt="Share"
                  src="/gridiconsshare.svg"
                />
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Share
                </div>
              </div>
              <div className="h-6 flex-1 flex flex-row items-center justify-center gap-[2px]">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt="Compare"
                  src="/comparesvgrepocom-1.svg"
                />
                <div className="self-stretch flex-1 relative leading-[150%] font-semibold">
                  Compare
                </div>
              </div>
              <div className="h-6 flex flex-row items-center justify-center gap-[2px]">
                <img className="h-4 w-4 relative" alt="Like" src="/heart.svg" />
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Like
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
