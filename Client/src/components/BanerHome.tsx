import { FunctionComponent } from "react";
import { Link } from "react-router-dom";


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
     
          <div className="relative font-light inline-block min-w-[77px] z-[1]">
            Home
          </div>
    </div>
  );
};

export default BanerHome;
