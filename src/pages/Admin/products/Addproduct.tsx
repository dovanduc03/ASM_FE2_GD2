import React from 'react';
import { Button, TextField, Typography, Stack, Box, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { ICategory } from "../../../type/category.type";
import { createProducts, updateProducts, getOneProduct } from "../../../api/productApi";
import { cateList } from "../../../api/categories";
import { IProduct } from '../../../type/products.type';

// Định nghĩa schema validation cho form
const validateForm = yup.object({
  name: yup.string().required("Tên sản phẩm là bắt buộc"),
  description: yup.string().required("Mô tả là bắt buộc"),
  categoryId: yup.string().required("Danh mục là bắt buộc"),
  image: yup.mixed().required("Ảnh là bắt buộc"),
  price: yup.string().required("Giá là bắt buộc"),
});

// Loại dữ liệu cho form dựa trên schema validation
type FormData = yup.InferType<typeof validateForm>;

export default function AddProduct() {
  const { id } = useParams();
  const isEditing = id !== undefined;
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      description: "",
      categoryId: "",
      image: "",
      price: "",
    },
    resolver: yupResolver(validateForm),
  });

  // Mutation để thêm sản phẩm mới
  const addProductMutation = useMutation({
    mutationFn: (data: FormData) => {
      const productData: IProduct = {
        ...data,
        id: "", // ID không cần cho tạo mới, có thể để trống
      };
      return createProducts(productData);
    },
    onError: () => {
      toast.error("Có lỗi xảy ra khi thêm sản phẩm.");
    },
    onSuccess: () => {
      reset();
      toast.success("Thêm sản phẩm thành công!");
      navigate("/admin/products");
    },
  });

  // Mutation để cập nhật sản phẩm
  const updateProductMutation = useMutation({
    mutationFn: (data: FormData) => {
      const productData: IProduct = {
        ...data,
        id: id as string, // Thêm ID vào đối tượng sản phẩm
      };
      return updateProducts(productData);
    },
    onError: () => {
      toast.error("Có lỗi xảy ra khi cập nhật sản phẩm.");
    },
    onSuccess: () => {
      reset();
      toast.success("Cập nhật sản phẩm thành công!");
      navigate("/admin/products");
    },
  });

  // Query để lấy thông tin sản phẩm khi chỉnh sửa
  const { data: productData, isLoading: isProductLoading, isError: isProductError } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      try {
        const response = await getOneProduct(id as string);
        console.log('Fetched product data:', response.data); // Log dữ liệu sản phẩm
        return response.data;
      } catch (error) {
        console.error('Error fetching product:', error);
        throw new Error('Lỗi khi lấy sản phẩm');
      }
    },
    enabled: isEditing,
  });

  // Cập nhật giá trị form khi dữ liệu đã được tải
  React.useEffect(() => {
    if (productData) {
      // Kiểm tra nếu productData có đủ tất cả các trường cần thiết
      if (!productData.id) {
        console.error('Product data does not have an ID');
        return;
      }
      setValue("name", productData.name || '');
      setValue("description", productData.description || '');
      setValue("price", productData.price || '');
      setValue("categoryId", productData.categoryId || '');
      setValue("image", productData.image || '');
    }
  }, [productData, setValue]);

  // Query để lấy danh sách danh mục
  const { data: categoryListData, isLoading: isCategoriesLoading, isError: isCategoriesError } = useQuery({
    queryKey: ['categories'],
    queryFn: () => cateList().then(response => response.data),
  });

  // Hàm hủy bỏ
  const handleCancel = () => {
    reset();
    navigate("/admin/products");
  };

  // Hàm xử lý gửi form
  const handleSubmitForm = (data: FormData) => {
    if (isEditing) {
      if (!id) {
        toast.error("ID sản phẩm không tồn tại.");
        return;
      }
      updateProductMutation.mutate({ ...data, id: id as string });
    } else {
      addProductMutation.mutate(data);
    }
  };

  return (
    <Box sx={{ m: "auto", width: 600 }}>
      <Typography variant="h4" align="center" mt={3} mb={2}>
        {isEditing ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm"}
      </Typography>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Stack spacing={2}>
          <TextField
            label="Tên sản phẩm"
            variant="outlined"
            fullWidth
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            label="Mô tả"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
          />

          <TextField
            label="Giá"
            variant="outlined"
            fullWidth
            {...register("price")}
            error={!!errors.price}
            helperText={errors.price?.message}
          />

          <TextField
            select
            label="Danh mục"
            variant="outlined"
            fullWidth
            {...register("categoryId")}
            error={!!errors.categoryId}
            helperText={errors.categoryId?.message}
          >
            <MenuItem value="">Chọn danh mục</MenuItem>
            {categoryListData?.map((item: ICategory) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>

          <input
            type="file"
            accept="image/*"
            {...register("image")}
          />

          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <Button variant="contained" type="submit">
              {isEditing ? "Cập nhật" : "Tạo mới"}
            </Button>
            <Button variant="contained" onClick={handleCancel}>
              Hủy bỏ
            </Button>
          </Stack>
        </Stack>
      </form>
      {isProductLoading && <p>Đang tải sản phẩm...</p>}
      {isProductError && <p>Lỗi khi tải sản phẩm.</p>}
      {isCategoriesLoading && <p>Đang tải danh mục...</p>}
      {isCategoriesError && <p>Lỗi khi tải danh mục.</p>}
    </Box>
  );
}
