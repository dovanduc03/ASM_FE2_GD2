import { FunctionComponent } from "react";



const Header: FunctionComponent= () => {
  return (
    <header
      className={`self-stretch bg-color-white flex flex-row items-end justify-start pt-[29px] px-[54px] pb-[30px] box-border gap-[266px] top-[0] z-[99] sticky max-w-full text-left text-15xl text-black font-montserrat mq450:gap-[33px] mq800:gap-[66px] mq1350:gap-[133px] mq1350:pl-[27px] mq1350:pr-[27px] mq1350:box-border `}
    >
      <div className="h-[100px] w-[1440px] relative bg-color-white hidden max-w-full" />
      <div className="flex flex-row items-start justify-start gap-[5px]">
        <div className="w-[50px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border">
          <img
            className="self-stretch h-8 relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/meubel-house-logos05@2x.png"
          />
        </div>
        <a className="[text-decoration:none] relative font-bold text-[inherit] [-webkit-text-stroke:1px_#000] whitespace-nowrap z-[1]">
          Furniro
        </a>
      </div>
      <div className="w-[835px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border max-w-full text-base font-poppins mq1125:w-0">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1125:hidden">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[48px] z-[1]">
              Home
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[42px] z-[1]">
              Shop
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[49px] z-[1]">
              About
            </a>
          </div>
          <div className="w-[149px] flex flex-col items-start justify-start pt-0.5 pb-0 pr-5 pl-0 box-border">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[66px] z-[1]">
              Contact
            </a>
          </div>
          <div className="w-[247px] flex flex-row items-start justify-start gap-[45px]">
            <img
              className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[1]"
              loading="lazy"
              alt=""
              src="/mdiaccountalertoutline.svg"
            />
            <img
              className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[1]"
              loading="lazy"
              alt=""
              src="/akariconssearch.svg"
            />
            <img
              className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[1]"
              loading="lazy"
              alt=""
              src="/akariconsheart.svg"
            />
            <img
              className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[1]"
              loading="lazy"
              alt=""
              src="/antdesignshoppingcartoutlined.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
