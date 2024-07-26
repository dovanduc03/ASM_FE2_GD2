import { FunctionComponent } from "react";
import FeatureItems from "./FeatureItems";
import Warranty from "./Warranty";

export type Features1Type = {
  className?: string;
};

const Features1: FunctionComponent<Features1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full ${className}`}
    >
      <div className="bg-linen-100 flex flex-col items-center justify-between py-[100px] px-[53px] box-border min-h-[270px] max-w-full mq750:pl-[26px] mq750:pr-[26px] mq750:box-border">
        <div className="w-[1334px] overflow-x-auto flex flex-row items-center justify-between gap-[20px] max-w-full">
          <FeatureItems
            trophy1="/trophy-1.svg"
            highQuality="High Quality"
            craftedFromTopMaterials="crafted from top materials"
          />
          <Warranty />  
          <FeatureItems
            trophy1="/shipping.svg"
            highQuality="Free Shipping"
            craftedFromTopMaterials="Order over 150 $"
          />
          <FeatureItems
            trophy1="/customersupport.svg"
            highQuality="24 / 7 Support"
            craftedFromTopMaterials="Dedicated support"
          />
        </div>
      </div>
      <footer className="self-stretch bg-color-white box-border flex flex-col items-start justify-start pt-[46px] pb-9 pr-[99px] pl-[100px] gap-[48px] max-w-full text-left text-base text-black font-poppins border-[1px] border-solid border-gray-200 mq750:gap-[24px] mq750:pt-[30px] mq750:pb-[23px] mq750:pr-[49px] mq750:pl-[50px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="w-[1440px] h-[505.5px] relative bg-color-white box-border hidden max-w-full border-t-[1px] border-solid border-gray-200" />
        <div className="w-[1133px] flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
          <div className="w-[287px] flex flex-col items-start justify-start gap-[50px] text-5xl mq450:gap-[25px]">
            <h3 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[85px] z-[1] mq450:text-lgi">
              Funiro.
            </h3>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 text-base text-darkgray">
              <div className="relative z-[1]">
                <p className="m-0">
                  400 University Drive Suite 200 Coral Gables,
                </p>
                <p className="m-0">FL 33134 USA</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0 gap-[55px] text-darkgray">
            <div className="relative font-medium inline-block min-w-[40px] z-[1]">
              Links
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5 text-black">
              <div className="flex flex-col items-start justify-start gap-[45.7px]">
                <div className="relative font-medium inline-block min-w-[48px] z-[1]">
                  Home
                </div>
                <div className="relative font-medium inline-block min-w-[42px] z-[1]">
                  Shop
                </div>
                <div className="relative font-medium inline-block min-w-[49px] z-[1]">
                  About
                </div>
                <div className="relative font-medium inline-block min-w-[66px] z-[1]">
                  Contact
                </div>
              </div>
            </div>
          </div>
          <div className="w-[498px] flex flex-col items-start justify-start gap-[44px] max-w-full mq750:gap-[22px]">
            <div className="w-[298px] flex flex-row items-start justify-between pt-0 px-0 pb-[9px] box-border gap-[20px] text-darkgray">
              <div className="relative font-medium inline-block min-w-[37px] z-[1]">
                Help
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative font-medium inline-block min-w-[86px] z-[1]">
                  Newsletter
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[72px] mq750:flex-wrap mq750:gap-[36px]">
              <div className="relative font-medium z-[1]">Payment Options</div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[11px] min-w-[186px] text-sm text-darkgray">
                <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                  <div className="relative z-[1]">Enter Your Email Address</div>
                  <div className="self-stretch h-0.5 relative box-border z-[1] border-t-[1px] border-solid border-black" />
                </div>
                <div className="w-[75px] flex flex-col items-start justify-start gap-[3px]">
                  <input
                    className="w-full [border:none] [outline:none] font-medium font-poppins text-sm bg-[transparent] self-stretch h-[21px] relative text-black text-left inline-block min-w-[45px] p-0 z-[1]"
                    placeholder="SUBSCRIBE"
                    type="text"
                  />
                  <div className="w-[77px] h-0.5 relative box-border z-[1] border-t-[1px] border-solid border-black" />
                </div>
              </div>
            </div>
            <div className="relative font-medium inline-block min-w-[62px] z-[1]">
              Returns
            </div>
            <div className="relative font-medium inline-block min-w-[124px] z-[1]">
              Privacy Policies
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[34px] mq750:gap-[17px]">
          <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-gainsboro-300" />
          <div className="flex flex-row items-start justify-start py-0 px-0.5">
            <div className="relative z-[1]">
              2023 furino. All rights reverved
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Features1;
