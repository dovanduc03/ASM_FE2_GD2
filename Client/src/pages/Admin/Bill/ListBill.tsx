import React, { useEffect, useState } from "react";
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, IconButton } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { IBillList } from "../../../type/bill.type";
import { getBills, deleteBillUser } from "../../../api/bill";
import { ICartList } from "../../../type/carrt.type";
import { toast } from "react-toastify";

const ListBill: React.FC = () => {
  const [bills, setBills] = useState<IBillList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await getBills();
        console.log('API Response:', response.data); // Kiểm tra cấu trúc của dữ liệu phản hồi

        // Kiểm tra cấu trúc dữ liệu trước khi gán vào state
        if (Array.isArray(response.data)) { // Thay đổi đây để kiểm tra mảng trực tiếp
          console.log('Bills:', response.data); // Kiểm tra dữ liệu hóa đơn
          setBills(response.data);
        } else {
          console.warn('Dữ liệu hóa đơn không đúng cấu trúc hoặc không có hóa đơn');
          setBills([]);
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách hóa đơn:", error);
        setError("Không thể tải dữ liệu hóa đơn.");
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteBillUser(id);
      // Cập nhật lại danh sách hóa đơn sau khi xóa thành công
      setBills(bills.filter(bill => bill.id !== id));
      toast.success("Xóa thành công")
    } catch (error) {
        toast.error("Xóa thành công")
      setError("Không thể xóa hóa đơn.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Danh Sách Hóa Đơn
      </Typography>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <CircularProgress /> {/* Hiển thị biểu tượng tải */}
        </div>
      ) : error ? (
        <Typography variant="subtitle1" color="error">
          {error}
        </Typography>
      ) : bills.length > 0 ? (
        bills.map((bill) => (
          <Paper key={bill.id} style={{ padding: 16, marginBottom: 16 }}>
            <Typography variant="h6">ID Hóa Đơn: {bill.id}</Typography>
            <Typography variant="subtitle1">Tên: {bill.name}</Typography>
            <Typography variant="subtitle1">Địa chỉ: {bill.address}</Typography>
            <Typography variant="subtitle1">Mã ZIP: {bill.zipCode}</Typography>
            <Typography variant="subtitle1">Số điện thoại: {bill.phone}</Typography>
            <Typography variant="subtitle1">Thông tin thêm: {bill.info}</Typography>
            <Typography variant="subtitle1">Ngày tạo: {bill.createdAt}</Typography>
            <Typography variant="subtitle1">Phương thức thanh toán: {bill.paymentMethod}</Typography>
            <IconButton 
              onClick={() => handleDelete(bill.id)} 
              color="error" 
              style={{ position: 'absolute', top: 16, right: 16 }}
            >
              <DeleteIcon />
            </IconButton>
            <TableContainer component={Paper} style={{ marginTop: 16 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    
                    <TableCell>Tên</TableCell>
                    <TableCell>Giá</TableCell>
                    <TableCell>Số lượng</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bill.cartlist?.map((item: ICartList) => (
                    <TableRow key={item.id}>
                     
                      <TableCell>{item.product?.name || 'N/A'}</TableCell>
                      <TableCell>{item.product?.price || 'N/A'}</TableCell>
                      <TableCell>{item.count || 'N/A'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        ))
      ) : (
        <Typography variant="subtitle1">Không có hóa đơn nào để hiển thị.</Typography>
      )}
    </Container>
  );
};

export default ListBill;
