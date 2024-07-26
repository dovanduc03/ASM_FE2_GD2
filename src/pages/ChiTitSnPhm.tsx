import { FunctionComponent } from "react";
import Header from "../components/Header";
import BanerChitiet from "../components/BanerChitiet";
import ProductDetail from "../components/ProductDetail";




import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const ChiTitSnPhm: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-color-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[50px] box-border gap-[14px] leading-[normal] tracking-[normal]">
      <Header />
      <main className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start max-w-full">
          <BanerChitiet />
          <ProductDetail />
        </section>
        <section className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full text-left text-17xl text-black font-poppins">
         {/* Mô tả sản phẩm */}
          <div
            className="self-stretch h-[744px] bg-color-white flex flex-col items-start justify-start pt-0 px-0 pb-[65px] box-border gap-[47px] max-w-full text-left text-5xl text-darkgray font-poppins mq450:pb-[27px] mq450:box-border mq750:h-auto mq750:gap-[23px] mq1050:pb-[42px] mq1050:box-border "
          >
            <div className="self-stretch h-[744px] relative bg-color-white hidden" />
            <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-solid border-gainsboro-300" />
            <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[18px] pr-[21px] pl-5 box-border max-w-full shrink-0">
              <div className="w-[1239px] flex flex-col items-end justify-start gap-[36px] max-w-full mq750:gap-[18px]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[52px] max-w-full mq750:flex-wrap mq750:gap-[26px]">
                    <h3 className="m-0 relative text-inherit font-medium font-inherit text-black z-[1] mq450:text-lgi">
                      Description
                    </h3>
                    <h3 className="m-0 relative text-inherit font-normal font-inherit z-[1] mq450:text-lgi">
                      Additional Information
                    </h3>
                    <h3 className="m-0 relative text-inherit font-normal font-inherit z-[1] mq450:text-lgi">
                      Reviews [5]
                    </h3>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-justify text-base">
                  <div className="w-[1026px] flex flex-col items-start justify-start gap-[30px] max-w-full">
                    
                    <div className="self-stretch relative z-[1]">
                      {/* Mô tả */}
                        Weighing in under 7 pounds, the Kilburn is a lightweight piece
                        of vintage styled engineering. Setting the bar as one of the
                        loudest speakers in its class, the Kilburn is a compact,
                        stout-hearted hero with a well-balanced audio which boasts a
                        clear midrange and extended highs for a sound that is both
                        articulate and pronounced. The analogue knobs allow you to fine
                        tune the controls to your personal preferences while the
                        guitar-influenced leather strap enables easy and stylish travel.
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[29px] max-w-full">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[393px] min-h-[348px] z-[1] mq750:min-w-full"
                      loading="lazy"
                      alt=""
                      src="/group-107@2x.png"
                    />
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[393px] min-h-[348px] z-[1] mq750:min-w-full"
                      loading="lazy"
                      alt=""
                      src="/group-106@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-solid border-gainsboro-300" />
            </div>
         {/* Mô tả sản phẩm */}
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-col items-center justify-start pt-[55px] px-5 pb-[104px] box-border gap-[26px] max-w-full shrink-0 mq450:pt-[23px] mq450:pb-11 mq450:box-border mq1050:pt-9 mq1050:pb-[68px] mq1050:box-border">
              <div className="w-[1440px] h-[777px] relative bg-color-white hidden max-w-full" />
              <div className="w-[1240px] flex flex-row items-start justify-center py-0 pr-[23px] pl-5 box-border max-w-full">
                <h1 className="m-0 relative text-inherit font-medium font-inherit z-[1] mq450:text-3xl mq1050:text-10xl">
                  Related Products
                </h1>
              </div>
              <div className="w-[1236px] flex flex-col items-end justify-start gap-[44px] max-w-full mq750:gap-[22px]">
                <div className="self-stretch grid flex-row items-start justify-start gap-[32px] grid-cols-[repeat(4,_minmax(214px,_1fr))] z-[1] mq450:grid-cols-[minmax(214px,_1fr)] mq750:gap-[16px] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(214px,_370px))]">
                  
                  <ProductCard />
                  <ProductCard  />
                  <ProductCard  />
                  <ProductCard />
                  
                  
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[25px]">
                  <button className="cursor-pointer py-2.5 pr-5 pl-7 bg-color-white w-[245px] box-border flex flex-row items-start justify-center whitespace-nowrap z-[1] border-[1px] border-solid border-primary hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgoldenrod">
                    <div className="h-12 w-[245px] relative bg-color-white box-border hidden border-[1px] border-solid border-primary" />
                    <div className="relative text-base leading-[150%] font-semibold font-poppins text-primary text-left inline-block min-w-[89px] z-[1]">
                      Show More
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <Footer propMarginTop="-12px" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChiTitSnPhm;
