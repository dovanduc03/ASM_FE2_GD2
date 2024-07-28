import { FunctionComponent } from "react";
import FeatureItems from "./FeatureItems";
import Warranty from "./Warranty";
import Footer from "../Footer";
import { Container } from "postcss";

const Features: FunctionComponent = () => {
  return (
    <div style={{ width: '100%' }}>
    <section
      className="flex flex-col items-center justify-start py-0 px-0 max-w-full text-left text-6xl text-gray-100 font-poppins "
    >
      <div
        className="bg-linen-100 flex flex-col items-center justify-between py-[100px] px-[53px] min-h-[270px] max-w-full box-border"
        style={{ width: '100%' }}
      >
        <div className="flex flex-row items-center justify-between gap-[20px] flex-wrap max-w-full"
            style={{ width: '100%' }}>
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
    </div>
    
  );
};

export default Features;
