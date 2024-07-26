import { FunctionComponent } from "react";




const   FormInfor: FunctionComponent = () => {
  return (
    <div
      className="flex-[0.863] bg-color-white flex flex-col items-start justify-start pt-[35px] px-[74px] pb-[71px] box-border gap-[36px] min-w-[395px] max-w-full z-[1] text-left text-base text-black font-poppins mq1125:pt-5 mq1125:pb-[30px] mq1125:box-border mq800:gap-[18px] mq800:pl-[37px] mq800:pr-[37px] mq800:box-border mq800:min-w-full mq450:pb-5 mq450:box-border mq1325:flex-1 mq1325:pt-[23px] mq1325:pb-[46px] mq1325:box-border "
    >
      <div className="w-[608px] h-[1714px] relative bg-color-white hidden max-w-full" />
      <h1 className="m-0 relative text-17xl font-semibold font-inherit z-[1] mq800:text-10xl mq450:text-3xl">
        Billing details
      </h1>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-px box-border max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start gap-[22px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[19px] mq800:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[36px] min-w-[145px]">
              <div className="relative font-medium z-[1]">
                 Name 
              </div>
            </div>
          </div>
          <div className="self-stretch h-[75px] relative rounded-3xs bg-color-white box-border z-[1] border-[1px] border-solid border-darkgray" />
        </div>
      </div>

      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-px box-border max-w-full">
        <textarea
          className="[border:none] bg-[transparent] h-[121px] w-auto [outline:none] flex-1 flex flex-col items-start justify-start font-poppins font-medium text-base text-black max-w-full"
          placeholder="ZIP code"
          rows={6}
          cols={23}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-px box-border max-w-full">
        <textarea
          className="[border:none] bg-[transparent] h-[121px] w-auto [outline:none] flex-1 flex flex-col items-start justify-start font-poppins font-medium text-base text-black max-w-full"
          placeholder="Phone"
          rows={6}
          cols={23}
        />
      </div>

      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-0.5 box-border max-w-full">
        <div className="flex-1 rounded-3xs bg-color-white box-border flex flex-row items-start justify-start pt-6 px-[29px] pb-[23px] max-w-full z-[1] border-[1px] border-solid border-darkgray">
          <div className="h-[75px] w-[453px] relative rounded-3xs bg-color-white box-border hidden max-w-full border-[1px] border-solid border-darkgray" />
          <input
            className="w-[179px] [border:none] [outline:none] font-poppins text-base bg-[transparent] h-6 relative text-darkgray text-left inline-block p-0 z-[1]"
            placeholder="Additional information"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default FormInfor;
