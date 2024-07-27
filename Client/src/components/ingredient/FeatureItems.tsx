import { FunctionComponent } from "react";

export type FeatureItemsType = {
  className?: string;
  trophy1?: string;
  highQuality?: string;
  craftedFromTopMaterials?: string;
};

const FeatureItems: FunctionComponent<FeatureItemsType> = ({
  className = "",
  trophy1,
  highQuality,
  craftedFromTopMaterials,
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-[10px] max-w-full text-left text-6xl text-gray-100 font-poppins mq450:flex-wrap ${className}`}
    >
      <img
        className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={trophy1}
      />
      <div className="flex flex-col items-start justify-start gap-[2px]">
        <h3 className="m-0 relative text-inherit leading-[38px] font-semibold font-inherit mq450:text-xl mq450:leading-[30px]">
          {highQuality}
        </h3>
        <div className="relative text-xl leading-[150%] font-medium text-color-gray-3 mq450:text-base mq450:leading-[24px]">
          {craftedFromTopMaterials}
        </div>
      </div>
    </div>
  );
};

export default FeatureItems;
