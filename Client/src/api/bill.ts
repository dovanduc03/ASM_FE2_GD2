import { IBill, IBillList } from "../type/bill.type";
import { ICartList } from "../type/carrt.type";
import { http } from "./http";

// Hàm thêm hóa đơn và giỏ hàng
export const addtoBillUser = async (bill: IBill, cartlist: ICartList[]) => {
    try {
      // Tạo đối tượng hóa đơn kết hợp với giỏ hàng
      const billData = {
        ...bill,
        cartlist: cartlist.map(item => ({
          id: item.id,
          count: item.count,
          product: item.product ? {
            id: item.product.id,
            name: item.product.name,
            price: item.product.price
          } : undefined
        }))
      };
  
      // Gửi dữ liệu hóa đơn đến server
      const response = await http.post<{ id: number }>("bills", billData);
  
      // Trả về phản hồi từ server
      return response;
    } catch (error) {
      console.error("Lỗi khi thêm hóa đơn:", error);
      throw error;
    }
  };    


  export const getBills = async () => {
    try {
      const response = await http.get<{ bills: IBillList[] }>("bills");
      return response;
    } catch (error) {
      console.error("Lỗi khi lấy danh sách hóa đơn:", error);
      throw error;
    }
  };    




  export const deleteBillUser = async (id: number) => {
    try {
      // Gửi yêu cầu DELETE để xóa hóa đơn
      await http.delete(`bills/${id}`);
      console.log(`Bill with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting bill:", error);
      throw error; // Ném lỗi để có thể xử lý ở nơi gọi hàm
    }
  };