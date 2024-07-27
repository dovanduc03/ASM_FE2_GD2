import { useMutation, useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';
import { cateList, deleteCate } from '../../../api/categories';
import { ICategory } from '../../../type/category.type';

// Loại dữ liệu cho danh sách danh mục
type CategoryType = Pick<ICategory, 'name' | 'id'>[];

export default function ListCate() {
  // Query để lấy danh sách danh mục
  const { data: categoryList, refetch, isLoading, isError: queryError } = useQuery<CategoryType>({
    queryKey: ['categories'], // Sử dụng plural cho consistency
    queryFn: () => cateList().then(response => response.data), // Đảm bảo queryFn trả về dữ liệu đúng kiểu
    staleTime: 5000, // Tùy chỉnh thời gian làm mới dữ liệu
  });

  // Lấy accessToken từ localStorage
  const accessToken = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string).accessToken
    : '';

  // Mutation để xóa danh mục
  const { mutate: deleteCategory, isError: mutationError } = useMutation({
    mutationFn: (id: string) => deleteCate({ id, accessToken }),
    onSuccess: () => {
      toast.success('Xóa thành công');
      refetch(); // Làm mới danh sách sau khi xóa thành công
    }
  });

  // Hàm xử lý xóa
  const handleDelete = (id: string) => {
    const shouldDelete = window.confirm('Bạn có chắc chắn muốn xóa?');
    if (shouldDelete) {
      deleteCategory(id);
    }
  };

  // Xử lý lỗi
  if (queryError) {
    toast.error('Không thể tải danh mục.');
    console.error(queryError);
  }

  if (mutationError) {
    toast.error('Có lỗi xảy ra khi xóa danh mục.');
    console.error(mutationError);
  }

  return (
    <TableContainer component={Paper}>
      <Typography variant="h4" align="center" mt={3} mb={2}>
        Danh Sách Danh Mục
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Danh mục</TableCell>
            <TableCell align="center">
              <Link to="/admin/category/add" style={{ textDecoration: 'none', color: '#1976d2' }}>
                Thêm
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={3} align="center">
                Đang tải...
              </TableCell>
            </TableRow>
          ) : categoryList?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} align="center">
                Không có danh mục nào.
              </TableCell>
            </TableRow>
          ) : (
            categoryList?.map((category) => (
              <TableRow key={category.id}>
                <TableCell component="th" scope="row">
                  {category.name}
                </TableCell>
                <TableCell align="right">
                  <Link
                    to={`/admin/category/edit/${category.id}`}
                    style={{ textDecoration: 'none', color: '#1976d2' }}
                  >
                    Sửa
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleDelete(category.id)}
                    style={{ color: '#d32f2f' }}
                  >
                    Xóa
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
