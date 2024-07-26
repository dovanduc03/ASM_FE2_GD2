import { FunctionComponent } from "react";

export type WarrantyType = {
  className?: string;
};

const Warranty: FunctionComponent<WarrantyType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-center gap-[10px] max-w-full text-left text-6xl text-gray-100 font-poppins mq450:flex-wrap ${className}`}
    >
      <img
        className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/guarantee.svg"
      />
      <div className="h-[85px] w-[85px] relative hidden" />
      <div className="flex flex-col items-start justify-start gap-[2px]">
        <h3 className="m-0 relative text-inherit leading-[38px] font-semibold font-inherit mq450:text-xl mq450:leading-[30px]">
          Warranty Protection
        </h3>
        <div className="relative text-xl leading-[150%] font-medium text-color-gray-3 inline-block min-w-[126px] mq450:text-base mq450:leading-[24px]">
          Over 2 years
        </div>
      </div>
    </div>
  );
};

export default Warranty;
