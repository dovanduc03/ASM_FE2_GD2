import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface BanerChitietProps {
  productName: string;
}

const BanerChitiet: FunctionComponent<BanerChitietProps> = ({ productName }) => {
  return (
    <div
      className="self-stretch bg-linen-200 flex flex-row items-center justify-start pt-[31px] px-[99px] pb-8 box-border gap-[21px] max-w-full text-left text-base text-darkgray font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border mq750:flex-wrap mq750:pl-[49px] mq750:pr-[49px] mq750:box-border"
    >
      <div className="h-[100px] w-[1440px] relative bg-linen-200 hidden max-w-full" />
      <div className="flex flex-row items-center justify-start gap-[14px]">
      <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
          <a className="text-darkgray">Home</a>
        </Link>
        <div className="flex flex-row items-center justify-start pt-0.5 px-0 pb-0">
          <img
            className="w-5 h-5 relative overflow-hidden shrink-0 object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/dashiconsarrowdownalt2@2x.png"
          />
        </div>
        <Link to={'/'} className="text-darkgray">
          <a className="text-darkgray">Shop</a>
        </Link>
      
        <div className="flex flex-row items-center justify-start pt-0.5 px-0 pb-0">
          <img
            className="w-5 h-5 relative overflow-hidden shrink-0 object-contain z-[1]"
            alt=""
            src="/dashiconsarrowdownalt2@2x.png"
          />
        </div>
        <div className="h-[37px] w-[auto] flex flex-row items-center justify-between gap-[20px] text-black">
          <div className="h-[39px] w-0.5 relative box-border z-[1] border-r-[2px] border-solid border-darkgray" />
          <div className="flex flex-row items-center justify-start pt-1.5 px-0 pb-0 whitespace-nowrap">
            <div className="relative inline-block min-w-[108px] z-[1] text-gray-600">
              {productName} {/* Hiển thị tên sản phẩm */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanerChitiet;
