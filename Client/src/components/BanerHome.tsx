import { FunctionComponent } from "react";


const BanerHome: FunctionComponent = () => {
  return (
    <div
      className="self-stretch flex flex-col items-center justify-start pt-[121px] px-5 pb-[97px] relative gap-[2px] text-left text-29xl text-black font-poppins "
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
        <img
          className="w-full h-full overflow-hidden object-contain absolute left-[0px] top-[0px] [transform:scale(1.038)]"
          alt=""
          src="/placeholder@2x.png"
        />
      </div>
      <h1 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[124px] z-[1] mq450:text-10xl mq800:text-19xl">
        Shop
      </h1>
      <div className="w-[124px] flex flex-row items-start justify-start py-0 pr-px pl-0.5 box-border text-base">
        <div className="flex-1 flex flex-row items-start justify-start gap-[6px]">
          <div className="flex-1 relative font-medium inline-block min-w-[48px] z-[1]">
            Home
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-5 h-5 relative overflow-hidden shrink-0 object-contain z-[1]"
              alt=""
              src="/dashiconsarrowdownalt2@2x.png"
            />
          </div>
          <div className="flex-1 relative font-light inline-block min-w-[41px] z-[1]">
            Shop
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanerHome;
