import { FunctionComponent } from "react";
import Header from "../components/Header";


import Features1 from "../components/ingredient/Features1";

const GiHng: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-color-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[50px] box-border leading-[normal] tracking-[normal]">
      <Header />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[22px] box-border max-w-full">
      <div
      className="self-stretch flex flex-col items-center justify-start pt-[61px] pb-[97px] pr-[25px] pl-5 relative gap-[1px] text-left text-29xl text-black font-poppins }"
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
        <img
          className="w-full h-full overflow-hidden object-contain absolute left-[0px] top-[0px] [transform:scale(1.038)]"
          alt=""
          src="/placeholder@2x.png"
        />
      </div>
      <div className="w-[115px] flex flex-row items-start justify-end py-0 pr-0.5 pl-[7px] box-border">
        <div className="h-[133px] flex-1 relative">
          <h1 className="m-0 absolute top-[61px] left-[0px] text-inherit font-medium font-inherit inline-block min-w-[106px] z-[1] mq1050:text-19xl mq450:text-10xl">
            Cart
          </h1>
          <img
            className="absolute top-[0px] left-[15px] w-[77px] h-[77px] object-cover z-[1]"
            alt=""
            src="/meubel-house-logos05-1@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[6px] text-base">
        <div className="relative font-medium inline-block min-w-[48px] z-[1]">
          Home
        </div>
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <img
            className="w-5 h-5 relative overflow-hidden shrink-0 object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/dashiconsarrowdownalt2@2x.png"
          />
        </div>
        <div className="relative font-light inline-block min-w-[35px] z-[1]">
          Cart
        </div>
      </div>
    </div>
    <div
      className="self-stretch bg-color-white flex flex-row items-start justify-start pt-[72px] px-[100px] pb-[63px] box-border gap-[30px] max-w-full text-left text-base text-black font-poppins lg:flex-wrap mq750:gap-[15px] mq750:pt-[47px] mq750:px-[50px] mq750:pb-[41px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border "
    >
      <div className="h-[525px] w-[1440px] relative bg-color-white hidden max-w-full" />
      <div className="flex-1 flex flex-col items-start justify-start gap-[55px] max-w-full mq1050:min-w-full mq450:gap-[27px]">
        <div className="self-stretch bg-linen-200 overflow-x-auto flex flex-row items-start justify-between pt-[15px] pb-4 pr-[146px] pl-[142px] gap-[20px] z-[1] mq1050:pl-[71px] mq1050:pr-[73px] mq1050:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[55px] w-[817px] relative bg-linen-200 shrink-0 hidden" />
          <div className="relative font-medium inline-block min-w-[63px] z-[2]">
            Product
          </div>
          <div className="w-[63px] shrink-0 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
            <div className="relative font-medium inline-block min-w-[40px] z-[2]">
              Price
            </div>
          </div>
          <div className="w-[175px] shrink-0 flex flex-row items-start justify-start gap-[36px]">
            <div className="relative font-medium inline-block min-w-[70px] z-[2]">
              Quantity
            </div>
            <div className="relative font-medium inline-block min-w-[69px] z-[2]">
              Subtotal
            </div>
          </div>
        </div>
        <div className="w-[792px] flex flex-row items-end justify-start gap-[34px] max-w-full text-darkgray mq750:flex-wrap mq450:gap-[17px]">
          <img
            className="h-[105px] w-[108px] relative object-cover cursor-pointer z-[1]"
            loading="lazy"
            alt=""
            src="/group-146@2x.png"
            
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border min-w-[220px] min-h-[64px] max-w-full">
            <div className="w-[275px] flex flex-row items-start justify-between gap-[20px]">
              <div className="relative inline-block min-w-[108px] z-[1]">
                Asgaard sofa
              </div>
              <div className="relative inline-block min-w-[98px] z-[1]">
                25.000.000đ
              </div>
            </div>
          </div>
          <div className="w-[277px] flex flex-col items-start justify-end pt-0 px-0 pb-9 box-border text-black">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="rounded-8xs flex flex-row items-start justify-start py-0.5 px-[13px] z-[1] border-[1px] border-solid border-darkgray">
                <div className="h-8 w-8 relative rounded-8xs box-border hidden border-[1px] border-solid border-darkgray" />
                <div className="relative inline-block min-w-[6px] z-[1]">1</div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[3px] pb-0 pr-[7px] pl-0">
                <div className="relative inline-block min-w-[98px] z-[1]">
                  25.000.000đ
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-7 h-7 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/antdesigndeletefilled.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[393px] bg-linen-200 flex flex-col items-start justify-start pt-[15px] px-[75px] pb-20 box-border gap-[61px] min-w-[393px] max-w-full z-[1] text-13xl lg:flex-1 mq750:min-w-full mq450:gap-[30px] mq450:pt-5 mq450:px-5 mq450:pb-[52px] mq450:box-border">
        <div className="w-[393px] h-[390px] relative bg-linen-200 hidden max-w-full" />
        <div className="flex flex-row items-start justify-start py-0 px-[21px]">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq1050:text-7xl mq450:text-lgi">
            Cart Totals
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[42px] text-base">
          <div className="self-stretch flex flex-col items-start justify-start gap-[31px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative font-medium inline-block min-w-[69px] z-[1]">
                Subtotal
              </div>
              <div className="relative text-darkgray inline-block min-w-[98px] z-[1]">
                25.000.000đ
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative font-medium inline-block min-w-[41px] z-[1]">
                Total
              </div>
              <div className="relative text-xl font-medium text-primary inline-block min-w-[125px] z-[1] mq450:text-base">
                25.000.000đ
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2.5 pl-[11px]">
            <button
              className="cursor-pointer pt-3 pb-[13px] pr-[58px] pl-[59px] bg-[transparent] flex-1 rounded-mini flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100"
              
            >
              <div className="h-[59px] w-[222px] relative rounded-mini box-border hidden border-[1px] border-solid border-black" />
              <div className="relative text-xl font-poppins text-black text-left inline-block min-w-[105px] z-[1]">
                Check Out
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  
      </section>
      <Features1 />
    </div>
  );
};

export default GiHng;
