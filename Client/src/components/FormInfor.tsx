import { FunctionComponent } from "react";

const RecipientForm: FunctionComponent = () => {
  return (
    <div
      className="flex-[0.863] bg-color-white flex flex-col items-start justify-start pt-[35px] px-[74px] pb-[71px] box-border gap-[36px] min-w-[395px] max-w-full z-[1] text-left text-base text-black font-poppins mq1125:pt-5 mq1125:pb-[30px] mq1125:box-border mq800:gap-[18px] mq800:pl-[37px] mq800:pr-[37px] mq800:box-border mq800:min-w-full mq450:pb-5 mq450:box-border mq1325:flex-1 mq1325:pt-[23px] mq1325:pb-[46px] mq1325:box-border "
    >
      <h1 className="m-0 relative text-17xl font-semibold font-inherit z-[1] mq800:text-10xl mq450:text-3xl">
        Recipient Information
      </h1>
      
      <div className="flex flex-col gap-[22px] max-w-full">
        <div className="flex flex-col gap-[36px] min-w-[145px]">
          <label className="relative font-medium z-[1]">Name</label>
          <input
            className="h-[75px] w-[200%] rounded-3xs bg-color-white border-[1px] border-solid border-darkgray px-3 py-2"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col gap-[36px] min-w-[145px]">
          <label className="relative font-medium z-[1]">Address</label>
          <input
            className="h-[75px] w-[200%] rounded-3xs bg-color-white border-[1px] border-solid border-darkgray px-3 py-2"
            type="text"
            placeholder="Enter your address"
          />
        </div>

        <div className="flex flex-col gap-[36px] min-w-[145px]">
          <label className="relative font-medium z-[1]">ZIP Code</label>
          <input
            className="h-[75px] w-[200%] rounded-3xs bg-color-white border-[1px] border-solid border-darkgray px-3 py-2"
            type="text"
            placeholder="Enter your ZIP code"
          />
        </div>

        <div className="flex flex-col gap-[36px] min-w-[145px]">
          <label className="relative font-medium z-[1]">Phone</label>
          <input
            className="h-[75px] w-[200%] rounded-3xs bg-color-white border-[1px] border-solid border-darkgray px-3 py-2"
            type="text"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="flex flex-col gap-[36px] min-w-[145px]">
          <label className="relative font-medium z-[1]">Additional Information</label>
          <textarea
            className="h-[121px] w-[200%] rounded-3xs bg-color-white border-[1px] border-solid border-darkgray px-3 py-2"
            placeholder="Enter any additional information"
            rows={4}
          />
        </div>
      </div>
    </div>
  );
};

export default RecipientForm;
