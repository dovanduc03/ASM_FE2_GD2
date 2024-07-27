import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FooterType = {
  className?: string;

  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  propMarginTop,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <footer
      className={`self-stretch bg-color-white box-border flex flex-col items-start justify-start pt-[46px] pb-9 pr-[99px] pl-[100px] gap-[48px] max-w-full text-left text-base text-darkgray font-poppins border-[1px] border-solid border-gray-200 mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[24px] mq800:pt-[30px] mq800:pb-[23px] mq800:pr-[49px] mq800:pl-[50px] mq800:box-border ${className}`}
      style={footerStyle}
    >
      <div className="w-[1440px] h-[505.5px] relative bg-color-white box-border hidden max-w-full border-t-[1px] border-solid border-gray-200" />
      <div className="w-[1133px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1125:flex-wrap">
        <div className="w-[287px] flex flex-col items-start justify-start gap-[50px] text-5xl text-black mq450:gap-[25px]">
          <h3 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[85px] z-[1] mq450:text-lgi">
            Funiro.
          </h3>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 text-base text-darkgray">
            <div className="relative z-[1]">
              <p className="m-0">
                400 University Drive Suite 200 Coral Gables,
              </p>
              <p className="m-0">FL 33134 USA</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0 gap-[55px]">
          <div className="relative font-medium inline-block min-w-[40px] z-[1]">
            Links
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5 text-black">
            <div className="flex flex-col items-start justify-start gap-[45.7px]">
              <div className="relative font-medium inline-block min-w-[48px] z-[1]">
                Home
              </div>
              <div className="relative font-medium inline-block min-w-[42px] z-[1]">
                Shop
              </div>
              <div className="relative font-medium inline-block min-w-[49px] z-[1]">
                About
              </div>
              <div className="relative font-medium inline-block min-w-[66px] z-[1]">
                Contact
              </div>
            </div>
          </div>
        </div>
        <div className="w-[498px] flex flex-col items-start justify-start gap-[53px] max-w-full mq800:gap-[26px]">
          <div className="w-[298px] flex flex-row items-start justify-between gap-[20px]">
            <div className="relative font-medium inline-block min-w-[37px] z-[1]">
              Help
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="relative font-medium inline-block min-w-[86px] z-[1]">
                Newsletter
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[44.5px] text-black mq800:gap-[22px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[72px] mq800:flex-wrap mq800:gap-[36px]">
              <div className="relative font-medium z-[1]">Payment Options</div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[11px] min-w-[186px] text-sm text-darkgray">
                <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                  <div className="relative z-[1]">Enter Your Email Address</div>
                  <div className="self-stretch h-0.5 relative box-border z-[1] border-t-[1px] border-solid border-black" />
                </div>
                <div className="w-[75px] flex flex-col items-start justify-start gap-[3px]">
                  <input
                    className="w-full [border:none] [outline:none] font-medium font-poppins text-sm bg-[transparent] self-stretch h-[21px] relative text-black text-left inline-block min-w-[45px] p-0 z-[1]"
                    placeholder="SUBSCRIBE"
                    type="text"
                  />
                  <div className="w-[77px] h-0.5 relative box-border z-[1] border-t-[1px] border-solid border-black" />
                </div>
              </div>
            </div>
            <div className="relative font-medium inline-block min-w-[62px] z-[1]">
              Returns
            </div>
            <div className="relative font-medium inline-block min-w-[124px] z-[1]">
              Privacy Policies
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[34px] text-black mq800:gap-[17px]">
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-gainsboro-300" />
        <div className="flex flex-row items-start justify-start py-0 px-0.5">
          <div className="relative z-[1]">2023 furino. All rights reverved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
