import { IBill, IBillDetail } from "../type/bill.type";
import { http } from "./http";


// Đảm bảo tất cả các yêu cầu API đều sử dụng cùng một đường dẫn
const BASE_URL = '/bills';

// Tạo hóa đơn
const createBill = (data: Omit<IBill, "id">) => http.post(`${BASE_URL}`, data);

// Lấy danh sách hóa đơn
const billList = async () => await http.get<IBill[]>(`${BASE_URL}`);

// Lấy thông tin chi tiết hóa đơn theo ID
const getOneBill = (id: string) => http.get<IBillDetail>(`${BASE_URL}/${id}`);

// Xóa hóa đơn theo ID
const deleteBill = (id: string) => http.delete(`${BASE_URL}/${id}`);

// Cập nhật hóa đơn theo ID
export async function updateBill({ body, id }: { body: IBill; id: string }) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}

export {
  createBill,
  deleteBill,
  billList,
  getOneBill,
};
