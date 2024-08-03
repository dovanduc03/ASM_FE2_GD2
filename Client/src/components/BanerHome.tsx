import { FunctionComponent } from "react";
import { Link } from "react-router-dom";


const BanerHome: FunctionComponent = () => {
  return (
    <section
    className="self-stretch flex flex-col items-center justify-start pt-[61px] px-[603px] pb-[97px] relative gap-[1px] text-left text-29xl text-black font-poppins mq800:pl-[301px] mq800:pr-[301px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border"
  >
    <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
      <img
        className="w-full h-full overflow-hidden object-contain absolute left-[0px] top-[0px] [transform:scale(1.038)]"
        alt=""
        src="/placeholder@2x.png"
      />
    </div>
    <div className="self-stretch h-[133px] relative flex flex-col items-center justify-center">
      <img
        className="absolute top-[0px] left-[calc(50%-38.5px)] w-[77px] h-[77px] object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/meubel-house-logos05-1@2x.png"
      />
      <h1 className="m-0 text-inherit font-medium font-inherit z-[1] mq800:text-19xl mq450:text-10xl">
        Home
      </h1>
    </div>
    
  </section>
  );
};

export default BanerHome;
