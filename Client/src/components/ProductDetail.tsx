import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../type/products.type";
import { getOneProduct } from "../api/productApi";
import { toast } from "react-toastify";
import { addtoCartUser } from "../api/cart";

const ProductDetail: FunctionComponent = () => {
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
        toast.error(error.message);
      }
    };

    fetchProduct();
  }, [idParams]);

  const addToCart = (buyCount: number, idPro: number) => {
    addtoCartUser(buyCount, idPro)
      .then(() => toast.success("Đặt hàng thành công"))
      .catch((error) => toast.error(error.message));
  };




  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-[35px] px-[99px] pb-[55px] box-border gap-[82px] max-w-full z-[2] mt-[-3px] text-left text-smi text-black font-poppins lg:flex-wrap lg:gap-[41px] lg:pl-[49px] lg:pr-[49px] lg:box-border mq450:pb-[23px] mq450:box-border mq750:gap-[20px] mq750:pl-6 mq750:pr-6 mq750:box-border mq1050:pb-9 mq1050:box-border">
      <div className="h-[820px] w-[1440px] relative bg-color-white hidden max-w-full" />
      <div className="w-[553px] flex flex-row items-start justify-start min-w-[553px] max-w-full z-[1] lg:flex-1 mq1050:min-w-full">
        <div className="h-[500px] flex-1 relative max-w-full">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[72px] w-[481px] z-[1]">
            <div className="absolute h-full top-[0px] bottom-[0px] left-[35px] rounded-3xs bg-linen-200 w-[423px]" />
            <img
              className="absolute top-[78px] left-[0px] w-[200px] h-[162px] object-cover z-[1]" // Thay đổi kích thước ảnh thành 200x162
              loading="lazy"
              alt=""
              src={getproduct?.image} // Thêm dấu ? để kiểm tra giá trị undefined
            />

          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[60px] min-w-[394px] max-w-full mq750:gap-[30px] mq750:min-w-full">
        <div className="w-[582px] flex flex-col items-start justify-start gap-[2px] max-w-full">
          <div className="flex flex-row items-start justify-start pt-0 px-px pb-2 text-23xl">
            <div className="flex flex-col items-start justify-start">
              <h1 className="m-0 relative text-inherit font-normal font-inherit z-[1] mq450:text-6xl mq1050:text-15xl">
                {getproduct?.name} {/* Thêm dấu ? để kiểm tra giá trị undefined */}
              </h1>
              <div className="relative text-5xl font-medium text-darkgray z-[1] mq450:text-lgi">
                {getproduct?.price}đ {/* Thêm dấu ? để kiểm tra giá trị undefined */}
              </div>
            </div>
          </div>
          <div className="w-[289px] h-[41px] flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border gap-[19.5px] text-darkgray">
            <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[6px]">
                {/* Các sao */}
                {[...Array(4)].map((_, index) => (
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/dashiconsstarfilled.svg"
                    key={index}
                  />
                ))}
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
                  alt=""
                  src="/carbonstarhalf.svg"
                />
              </div>
            </div>
            <div className="h-[31px] w-px relative box-border z-[1] border-r-[1px] border-solid border-darkgray" />
            <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <div className="relative inline-block min-w-[125px] z-[1]">
                5 Customer Review
              </div>
            </div>
          </div>
          <div className="w-[424px] relative inline-block max-w-full z-[1]">
            <p className="m-0">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <p className="m-0">&nbsp;</p>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2.5 text-sm text-darkgray">
            <div className="relative inline-block min-w-[27px] z-[1]">Size</div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-px pb-4">
            <div className="flex flex-row items-start justify-start gap-[16px]">
              {['L', 'XL', 'XS'].map((size, index) => (
                <div
                  key={index}
                  className={`rounded-8xs py-[5px] px-${index === 1 ? '2' : '3'} z-[1] ${index === 0 ? 'bg-primary text-color-white' : 'bg-linen-200'}`}
                >
                  <div className={`relative inline-block min-w-[${index === 0 ? '6' : index === 1 ? '14' : '16'}px] z-[1]`}>
                    {size}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2.5 text-sm text-darkgray">
            <div className="relative inline-block min-w-[38px] z-[1]">Color</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-base">
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                {['mediumslateblue', 'black', 'primary'].map((color, index) => (
                  <div
                    key={index}
                    className={`h-[30px] w-[30px] rounded-31xl bg-${color} z-[1]`}
                  />
                ))}
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px] mq750:flex-wrap">
                <div className="w-[131px] flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
                  <div className="self-stretch rounded-3xs bg-color-white overflow-x-auto flex flex-row items-start justify-between py-[18px] pr-[13px] pl-3.5 gap-[20px] z-[1] border-[1px] border-solid border-darkgray">
                    <div className="relative inline-block min-w-[9px] whitespace-nowrap z-[1]">-</div>
                    <div className="relative font-medium inline-block min-w-[6px] whitespace-nowrap z-[1]">1</div>
                    <div className="relative inline-block min-w-[11px] whitespace-nowrap z-[1]">+</div>
                  </div>
                </div>
                <button
                  className="cursor-pointer py-[15px] px-12 bg-[transparent] flex-1 rounded-mini box-border flex flex-row items-start justify-start min-w-[140px] whitespace-nowrap z-[1] border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100"
                  onClick={() => {
                    if (getproduct && getproduct.id) {
                      addToCart(buyCount, +getproduct.id);
                    } else {
                      toast.error("Sản phẩm không hợp lệ");
                    }
                  }} // Thêm dấu ? để kiểm tra giá trị undefined
                >
                  <div className="relative text-xl font-poppins text-black text-left inline-block min-w-[119px] z-[1]">
                    Add To Cart
                  </div>
                </button>
                <div className="flex-1 rounded-mini box-border flex flex-row items-start justify-start pt-[13px] pb-3 pr-[45px] pl-[46px] gap-[10px] min-w-[140px] z-[1] text-4xl border-[1px] border-solid border-black">
                  <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[16px] z-[1] mq450:text-lg">+</h3>
                  <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-xl">
                    <div className="relative inline-block min-w-[96px] z-[1] mq450:text-base">Compare</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-base text-darkgray mq750:gap-[20px]">
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
            <div className="self-stretch flex-1 relative box-border max-w-full z-[1] border-t-[1px] border-solid border-gainsboro-300" />
          </div>
          <div className="flex flex-row items-start justify-start gap-[14px]">
            <div className="flex flex-col items-start justify-start gap-[12.7px]">
              <div className="relative inline-block min-w-[30px] z-[1]">SKU</div>
              <div className="relative inline-block min-w-[75px] z-[1]">Category</div>
              <div className="relative inline-block min-w-[39px] z-[1]">Tags</div>
              <div className="relative inline-block min-w-[47px] z-[1]">Share</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <div className="relative font-medium inline-block min-w-[4px] z-[1]">:</div>
              <div className="relative font-medium inline-block min-w-[4px] z-[1]">:</div>
              <div className="relative font-medium inline-block min-w-[4px] z-[1]">:</div>
              <div className="relative font-medium inline-block min-w-[4px] z-[1]">:</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[12.7px]">
              <div className="relative inline-block min-w-[44px] z-[1]">SS001</div>
              <div className="relative inline-block min-w-[45px] z-[1]">Sofas</div>
              <div className="relative z-[1]">Sofa, Chair, Home, Shop</div>
              <div className="flex flex-row items-start justify-start gap-[24px]">
                {['facebookfill.svg', 'linkedinboxfill.svg', 'twittercirclefilled.svg'].map((icon, index) => (
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0" key={index}>
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src={`/${icon}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
