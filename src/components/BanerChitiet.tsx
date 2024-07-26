import { FunctionComponent } from "react";


const   BanerChitiet: FunctionComponent = () => {
  return (
    <div
      className="self-stretch bg-linen-200 flex flex-row items-start justify-start pt-[31px] px-[99px] pb-8 box-border gap-[21px] max-w-full text-left text-base text-darkgray font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border mq750:flex-wrap mq750:pl-[49px] mq750:pr-[49px] mq750:box-border"
    >
      <div className="h-[100px] w-[1440px] relative bg-linen-200 hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-[7px] pb-0 pr-[3px] pl-0">
        <div className="flex flex-row items-start justify-start gap-[14px]">
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[48px] z-[1]">
            Home
          </a>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-5 h-5 relative overflow-hidden shrink-0 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/dashiconsarrowdownalt2@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[41px] z-[1]">
          Shop
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[9px] pb-0 pr-1 pl-0">
        <img
          className="w-5 h-5 relative overflow-hidden shrink-0 object-contain z-[1]"
          alt=""
          src="/dashiconsarrowdownalt2@2x.png"
        />
      </div>
      <div className="h-[37px] w-[142px] flex flex-row items-start justify-between gap-[20px] text-black">
        <div className="h-[39px] w-0.5 relative box-border z-[1] border-r-[2px] border-solid border-darkgray" />
        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <div className="relative inline-block min-w-[108px] z-[1]">
            {/* in tên sản phẩm */}
            Asgaard sofa
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanerChitiet;
