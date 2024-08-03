import React, { useState, FunctionComponent, useEffect } from "react";
import { addtoBillUser } from "../../api/bill";
import { ICartList } from "../../type/carrt.type";
import { IBill } from "../../type/bill.type";
import { toast } from "react-toastify";
import { getCartList } from "../../api/cart";

const FormInfo: FunctionComponent = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");
  const [cartlist, setCartlist] = useState<ICartList[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("creditCard"); // Thêm trạng thái cho phương thức thanh toán

  useEffect(() => {
    getCartList().then(({ data }) => setCartlist(data));
  }, []);

  const handleSubmit = async () => {
    if (!name || !address || !zipCode || !phone) {
      toast.error("Vui lòng nhập đầy đủ thông tin."); // Thay thế alert bằng toast
      return;
    }

    const newBill: IBill = {
      name,
      address,
      zipCode,
      phone: Number(phone),
      info,
      createdAt: new Date().toISOString(), // Thêm ngày tạo đơn
      paymentMethod // Thêm phương thức thanh toán vào hóa đơn
    };

    try {
      const response = await addtoBillUser(newBill, cartlist);
      const billId = response.data.id; // ID hóa đơn được trả về từ server

      toast.success("Đặt hàng thành công!"); // Thay thế alert bằng toast
      // Reset các trường dữ liệu
      setName("");
      setAddress("");
      setZipCode("");
      setPhone("");
      setInfo("");
      setCartlist([]);
      setPaymentMethod("creditCard"); // Reset phương thức thanh toán
    } catch (error) {
      console.error("Lỗi khi đặt hàng:", error);
      toast.error("Đặt hàng thất bại."); // Thay thế alert bằng toast
    }
  };

  return (
    <div className="flex-[0.863] bg-color-white flex flex-col items-start justify-start pt-[35px] px-[74px] pb-[71px] box-border gap-[36px] min-w-[395px] max-w-full z-[1] text-left text-base text-black font-poppins mq1125:pt-5 mq1125:pb-[30px] mq1125:box-border mq800:gap-[18px] mq800:pl-[37px] mq800:pr-[37px] mq800:box-border mq800:min-w-full mq450:pb-5 mq450:box-border mq1325:flex-1 mq1325:pt-[23px] mq1325:pb-[46px] mq1325:box-border">
      <h1 className="m-0 relative text-17xl font-semibold font-inherit z-[1] mq800:text-10xl mq450:text-3xl">
        Recipient Information
      </h1>

      <div className="flex flex-col gap-[22px] max-w-full">
        <div className="flex flex-col gap-[36px] min-w-[145px]">
          <label className="relative font-medium z-[1]">Name</label>
          <input
            className="h-[75px] w-[100%] rounded-3xs bg-color-white border-[1px] border-solid border-darkgray px-3 py-2"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-[36px] min-w-[145px]">
          <label className="relative font-medium z-[1]">Address</label>
          <input
            className="h-[75px] w-[100%] rounded-3xs bg-color-white border-[1px] border-solid border-darkgray px-3 py-2"
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-[36px] min-w-[145px]">
          <label className="relative font-medium z-[1]">ZIP Code</label>
          <input
            className="h-[75px] w-[100%] rounded-3xs bg-color-white border-[1px] border-solid border-darkgray px-3 py-2"
            type="text"
            placeholder="Enter your ZIP code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-[36px] min-w-[145px]">
          <label className="relative font-medium z-[1]">Phone</label>
          <input
            className="h-[75px] w-[100%] rounded-3xs bg-color-white border-[1px] border-solid border-darkgray px-3 py-2"
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-[36px] min-w-[145px]">
          <label className="relative font-medium z-[1]">Additional Information</label>
          <textarea
            className="h-[121px] w-[100%] rounded-3xs bg-color-white border-[1px] border-solid border-darkgray px-3 py-2"
            placeholder="Enter any additional information"
            rows={4}
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-[36px] min-w-[145px]">
          <label className="relative font-medium z-[1]">Payment Method</label>
          <div className="flex flex-col gap-[12px]">
            <label>
              <input
                type="radio"
                value="BankTransfer"
                checked={paymentMethod === "BankTransfer"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Bank Transfer
            </label>
            <label>
              <input
                type="radio"
                value="Payment on Receipt"
                checked={paymentMethod === "Payment on Receipt"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Payment on Receipt
            </label>
            <label>
              <input
                type="radio"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Credit Card
            </label>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="py-[15px] px-5 bg-transparent w-[400px] rounded-mini border-[1px] border-black hover:bg-darkslategray-300 hover:border-darkslategray-100"
            onClick={handleSubmit}
          >
            <div className="text-xl font-poppins text-black">Place Order</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormInfo;
