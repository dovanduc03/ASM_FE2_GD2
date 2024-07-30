import { useQuery, useMutation } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Box, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { cateList } from '../../../api/categories';
import { deleteProducts, productList1 } from '../../../api/productApi';
import { IProduct } from '../../../type/products.type';
import { ICategory } from '../../../type/category.type';

// Loại dữ liệu cho danh sách sản phẩm
type ProductType = IProduct[];

// Loại dữ liệu cho danh sách danh mục
type CategoryType = Pick<ICategory, 'name' | 'id' >[];

export default function ListProduct() {
  // Trạng thái cho bộ lọc
  const [filter, setFilter] = useState<string>('');

  // Query để lấy danh sách danh mục
  const { data: categoryList, isLoading: isCategoryLoading, isError: categoryError } = useQuery<CategoryType>({
    queryKey: ['categories'],
    queryFn: () => cateList().then(response => response.data),
    staleTime: 5000,
  });

  // Query để lấy danh sách sản phẩm
  const { data: productData, isLoading: isProductLoading, isError: productError, refetch } = useQuery<ProductType>({
    queryKey: ['products'],
    queryFn: () => productList1().then(response => response.data),
    staleTime: 5000,
  });

  // Mutation để xóa sản phẩm
  const { mutate: deleteProduct, isError: deleteError } = useMutation({
    mutationFn: (id: string) => deleteProducts({ id }),
    onSuccess: () => {
      toast.success('Xóa sản phẩm thành công');
      refetch(); // Làm mới danh sách sau khi xóa thành công
    },
    onError: (error) => {
      toast.error('Có lỗi xảy ra khi xóa sản phẩm.');
      console.error(error);
    }
  });

  // Hàm xử lý xóa
  const handleDelete = (id: string) => {
    const shouldDelete = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?');
    if (shouldDelete) {
      deleteProduct(id);
    }
  };

  // Hàm xử lý lọc sản phẩm
  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value);
  };

  // Lọc sản phẩm theo tiêu chí
  const getFilteredProducts = () => {
    if (!productData) return [];

    switch (filter) {
      case 'price':
        return [...productData]
          .filter(product => !isNaN(parseFloat(product.price)))
          .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      case 'price_desc':
        return [...productData]
          .filter(product => !isNaN(parseFloat(product.price)))
          .sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      case 'name':
        return [...productData]
          .sort((a, b) => a.name.localeCompare(b.name));
      case 'name_desc':
        return [...productData]
          .sort((a, b) => b.name.localeCompare(a.name));
      default:
        return productData;
    }
  };
  
  const filteredProducts = getFilteredProducts();

  // Xử lý lỗi
  if (categoryError) {
    toast.error('Không thể tải danh mục.');
    console.error(categoryError);
  }

  if (productError) {
    toast.error('Không thể tải sản phẩm.');
    console.error(productError);
  }

  return (
    <TableContainer component={Paper}>
      <Typography variant="h4" align="center" mt={3} mb={2}>
        Danh Sách Sản Phẩm
      </Typography>

      <Box mb={2} display="flex" justifyContent="flex-end">
        <Select
          variant="outlined"
          size="small"
          sx={{ minWidth: 200 }}
          value={filter}
          onChange={handleFilterChange}
        >
          <MenuItem value="">Lọc sản phẩm</MenuItem>
          <MenuItem value="price">Giá tăng dần</MenuItem>
          <MenuItem value="price_desc">Giá giảm dần</MenuItem>
          <MenuItem value="name">Tên A-Z</MenuItem>
          <MenuItem value="name_desc">Tên Z-A</MenuItem>
        </Select>
      </Box>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tên sản phẩm</TableCell>
            <TableCell>Hình ảnh</TableCell>
            <TableCell>Danh mục</TableCell>
            <TableCell>Giá</TableCell>
            <TableCell colSpan={2} align="center">
              <Button
                component={Link}
                to="/admin/products/add"
                variant="contained"
                color="primary"
              >
                Thêm
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isProductLoading ? (
            <TableRow>
              <TableCell colSpan={6} align="center">
                Đang tải...
              </TableCell>
            </TableRow>
          ) : filteredProducts.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} align="center">
                Không có sản phẩm nào.
              </TableCell>
            </TableRow>
          ) : (
            filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>
                  <img
                    className="!max-w-44 !object-cover !max-h-44"
                    src={product.image}
                    alt={product.name}
                  />
                </TableCell>
                <TableCell>
                  {isCategoryLoading ? 'Loading...' : categoryList?.find((category) => category.id.toString() === product.categoryId)?.name || 'Unknown'}
                </TableCell>
                <TableCell>
                  {product.price || '1000'}
                </TableCell>
                <TableCell align="right">
                  <Button
                    component={Link}
                    to={`/admin/products/edit/${product.id}`}
                    variant="contained"
                    color="primary"
                  >
                    Sửa
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleDelete(product.id)}
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
