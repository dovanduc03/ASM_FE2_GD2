import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Box, Select, MenuItem, Pagination, PaginationItem, SelectChangeEvent, PaginationRenderItemParams, TextField } from '@mui/material';
import { cateList } from '../../../api/categories';
import { deleteProducts, productList1 } from '../../../api/productApi';
import { IProduct } from '../../../type/products.type';
import { ICategory } from '../../../type/category.type';

type ProductType = IProduct[];

type CategoryType = Pick<ICategory, 'name' | 'id'>[];

export default function ListProduct() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const [filter, setFilter] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState(false);

  // Sử dụng useQuery để lấy danh sách danh mục
  const { data: categoryList, isLoading: isCategoryLoading, isError: categoryError } = useQuery<CategoryType>({
    queryKey: ['categories'],
    queryFn: () => cateList().then(response => response.data),
    staleTime: 5000,
  });

  // Sử dụng useQuery để lấy danh sách sản phẩm
  const { data: productData, isLoading: isProductLoading, isError: productError, refetch } = useQuery<ProductType>({
    queryKey: ['products'],
    queryFn: () => productList1().then(response => response.data),
    staleTime: 5000,
  });

  const { mutate: deleteProduct, isError: deleteError } = useMutation({
    mutationFn: (id: string) => deleteProducts({ id }),
    onSuccess: () => {
      toast.success('Xóa sản phẩm thành công');
      refetch();
    },
    onError: (error) => {
      toast.error('Có lỗi xảy ra khi xóa sản phẩm.');
      console.error(error);
    }
  });

  const handleDelete = (id: string) => {
    const shouldDelete = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?');
    if (shouldDelete) {
      deleteProduct(id);
    }
  };

  const getFilteredProducts = () => {
    let filteredProducts: ProductType = productData || [];
    if (searchQuery) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    switch (filter) {
      // Các trường hợp lọc khác...
      default:
        return filteredProducts;
    }
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setCurrentPage(1);
    setFilter(event.target.value);
  };

  // const handleSearch = () => {
  //   setIsSearching(true);
  //   productList1().then(response => {
  //     refetch();
  //   }).catch(error => {
  //     toast.error('Có lỗi xảy ra khi tìm kiếm sản phẩm');
  //     console.error(error);
  //   });
  //update
  // };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = getFilteredProducts();
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleAddPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSubPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  if (categoryError) {
    toast.error('Không thể tải danh mục.');
    console.error(categoryError);
  }

  if (productError) {
    toast.error('Không thể tải sản phẩm.');
    console.error(productError);
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Typography variant="h4" align="center" mt={3} mb={2}>
          Danh Sách Sản Phẩm
        </Typography>
        <Box mb={2} display="flex" justifyContent="flex-end">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Tìm kiếm sản phẩm"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {/* <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
          >
            Tìm kiếm
          </Button> */}
        </Box>
      </Box>

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
            ) : currentProducts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  Không có sản phẩm nào.
                </TableCell>
              </TableRow>
            ) : (
              currentProducts.map((product) => (
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

      <Box mt={3} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(filteredProducts.length / productsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
          renderItem={(item) => (
            <PaginationItem
            component="div"
            {...item}
            onClick={event => {
              if (typeof item.onClick === 'function') {
                item.onClick(event);
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Cuộn lên đầu khi chuyển trang
              }
            }}
          />
          
          



          )}
        />
      </Box>
    </>
  );
}