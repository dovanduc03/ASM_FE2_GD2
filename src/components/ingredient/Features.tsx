import { FunctionComponent } from "react";
import FeatureItems from "./FeatureItems";
import Warranty from "./Warranty";
import Footer from "../Footer";

export type FeaturesType = {
  className?: string;
};

const Features: FunctionComponent<FeaturesType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start py-0 pr-[3px] pl-0 box-border max-w-full text-left text-6xl text-gray-100 font-poppins ${className}`}
    >
      <div className="self-stretch bg-linen-100 flex flex-col items-center justify-between py-[100px] px-[53px] box-border min-h-[270px] max-w-full mq800:pl-[26px] mq800:pr-[26px] mq800:box-border">
        <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq1350:flex-wrap">
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
      <Footer />
    </section>
  );
};

export default Features;
