import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";


import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

import Features from "../components/ingredient/Features";
import BanerHome from "../components/BanerHome";

const CaHng: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/chi-tit-sn-phm");
  }, [navigate]);

  return (
    <div className="w-full relative bg-color-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Header />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[46px] box-border gap-[1px] max-w-full mq450:pb-[30px] mq450:box-border">
        <BanerHome />
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[85px] box-border max-w-full mq800:pb-[23px] mq800:box-border mq1125:pb-9 mq1125:box-border mq1350:pb-[55px] mq1350:box-border">
        <div
          className="flex-1 flex flex-col items-center justify-start pt-[17px] px-5 pb-0 box-border gap-[70px] max-w-full cursor-pointer mq450:gap-[17px] mq800:gap-[35px]"
          onClick={onGroupContainerClick}
        >
          <div className="w-[1440px] h-[777px] relative bg-color-white hidden max-w-full" />
          <ProductCard />
  
        </div>
      </section>
      <Features />
    </div>
  );
};

export default CaHng;
