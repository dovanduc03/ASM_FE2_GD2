import { FunctionComponent } from "react";
import Header from "../../components/Header";
import Banerthanhtoan from "../../components/banerthanhtoan";
import FormInfor from "../../components/FormInfor";
import Tinhtonghdct from "../../components/Tinhtonghdct";
import FeatureItems from "../../components/ingredient/FeatureItems";
import Warranty from "../../components/ingredient/Warranty";
import Footer from "../../components/Footer";


const Checkout: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-color-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[50px] box-border leading-[normal] tracking-[normal]">
      <Header />
      <Banerthanhtoan />
      <section className="self-stretch bg-color-white flex flex-row items-start justify-start pt-[63px] pb-[52px] pr-[98px] pl-[100px] box-border gap-[26px] max-w-full shrink-0 mq1125:pt-[27px] mq1125:pb-[22px] mq1125:box-border mq800:pl-[50px] mq800:pr-[49px] mq800:box-border mq450:p-5 mq450:box-border mq1325:flex-wrap mq1325:pt-[41px] mq1325:pb-[34px] mq1325:box-border">
        <div className="h-[1829px] w-[1440px] relative bg-color-white hidden max-w-full" />
        <FormInfor/>
        <Tinhtonghdct />
      </section>
      <section className="self-stretch bg-linen-100 flex flex-col items-center justify-between py-[100px] px-[53px] box-border min-h-[270px] max-w-full mq800:pl-[26px] mq800:pr-[26px] mq800:box-border">
        <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq1325:flex-wrap">
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
      </section>
      <Footer propMarginTop="unset" />
    </div>
  );
};

export default Checkout;
