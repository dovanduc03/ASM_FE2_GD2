import { FunctionComponent } from "react";



const Tinhtonghdct: FunctionComponent = () => {
  return (
    <div
      className="flex-1 bg-color-white flex flex-col items-start justify-start pt-[87px] pb-[86px] pr-[37px] pl-[38px] box-border gap-[33.5px] min-w-[395px] max-w-full z-[1] text-left text-5xl text-black font-poppins mq800:gap-[17px] mq800:pt-[57px] mq800:pb-14 mq800:box-border mq800:min-w-full mq450:pt-[37px] mq450:pb-9 mq450:box-border mq1325:flex-1 "
    >
      <div className="w-[608px] h-[789px] relative bg-color-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[14px]">
          <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[94px] z-[1] mq450:text-lgi">
            Product
          </h3>
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px text-base">
            <div className="flex flex-col items-start justify-start gap-[22px]">
              <div className="flex flex-row items-start justify-start gap-[10.5px] text-xs">
                <div className="relative text-base text-darkgray inline-block min-w-[108px] z-[1]">
                  {/* Tên sản phẩm */}
                  Asgaard sofa
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="relative font-medium inline-block min-w-[8px] z-[1]">
                    X
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="relative font-medium inline-block min-w-[5px] z-[1]">
                    1
                  </div>
                </div>
              </div>
              <div className="relative inline-block min-w-[68px] z-[1]">
                Subtotal
              </div>
              <div className="relative inline-block min-w-[40px] z-[1]">
                Total
              </div>
            </div>
          </div>
        </div>
        <div className="w-[154px] flex flex-col items-start justify-start gap-[14px]">
          <div className="self-stretch flex flex-row items-start justify-end">
            <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[103px] z-[1] mq450:text-lgi">
              Subtotal
            </h3>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px] text-base">
            <div className="self-stretch flex flex-row items-start justify-end">
              <div className="relative font-light inline-block min-w-[95px] z-[1]">
                25.000.000đ
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-row items-start justify-end">
                <div className="relative font-light inline-block min-w-[95px] z-[1]">
                  25.000.000đ
                </div>
              </div>
              <b className="relative text-5xl text-primary z-[1] mq450:text-lgi">
                25.00.000đ
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[21.5px] max-w-full text-base">
        <div className="self-stretch h-px flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
          <div className="self-stretch flex-1 relative box-border max-w-full z-[1] border-t-[1px] border-solid border-gainsboro-300" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[3.5px] pr-0 pl-px box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[11px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-px">
              <div className="flex flex-row items-start justify-start gap-[15px]">
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="w-3.5 h-3.5 relative rounded-[50%] bg-black z-[1]" />
                </div>
                <div className="relative z-[1]">Direct Bank Transfer</div>
              </div>
            </div>
            <div className="self-stretch relative font-light text-darkgray text-justify z-[1]">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-0.5 text-darkgray">
          <div className="flex flex-col items-start justify-start gap-[11px]">
            <div className="flex flex-row items-start justify-start gap-[15px]">
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="w-3.5 h-3.5 relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-darkgray" />
              </div>
              <div className="relative font-medium z-[1]">
                Direct Bank Transfer
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[15px]">
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="w-3.5 h-3.5 relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-darkgray" />
              </div>
              <div className="relative font-medium z-[1]">Cash On Delivery</div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-justify z-[1]">
          <span className="font-light">{`Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our `}</span>
          <span className="font-semibold">privacy policy.</span>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[7px]">
        <button className="cursor-pointer py-[15px] px-5 bg-[transparent] w-[318px] rounded-mini box-border flex flex-row items-start justify-center whitespace-nowrap z-[1] border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
          <div className="h-16 w-[318px] relative rounded-mini box-border hidden border-[1px] border-solid border-black" />
          <div className="relative text-xl font-poppins text-black text-left inline-block min-w-[114px] z-[1]">
            Place order
          </div>
        </button>
      </div>
    </div>
  );
};

export default Tinhtonghdct;
