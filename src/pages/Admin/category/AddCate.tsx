import React from 'react';
import { Button, TextField, Typography, Stack, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { ICategory } from "../../../type/category.type";
import { createCate, updateCate, getOneCate } from "../../../api/categories";

// Định nghĩa schema validation cho form
const validateForm = yup.object({
  name: yup.string().required("Tên danh mục là bắt buộc"),
});

// Loại dữ liệu cho form dựa trên schema validation
type FormData = yup.InferType<typeof validateForm>;

export default function AddCategory() {
  const { id } = useParams();
  const idParams = id as string;
  const isEditing = id !== undefined;
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm<FormData>({
    defaultValues: { name: "" },
    resolver: yupResolver(validateForm),
  });

  // Mutation để thêm danh mục mới
  const addCategoryMutation = useMutation({
    mutationFn: (data: FormData) => createCate({ data }),
    onError: () => {
      toast.error("Có lỗi xảy ra khi thêm danh mục.");
    },
    onSuccess: () => {
      reset();
      toast.success("Thêm danh mục thành công!");
      navigate("/admin/category");
    },
  });

  // Mutation để cập nhật danh mục
  const updateCategoryMutation = useMutation({
    mutationFn: (data: FormData) => updateCate({ body: data, id: idParams }),
    onError: () => {
      toast.error("Có lỗi xảy ra khi cập nhật danh mục.");
    },
    onSuccess: () => {
      reset();
      toast.success("Cập nhật danh mục thành công!");
      navigate("/admin/category");
    },
  });

  // Query để lấy thông tin danh mục khi chỉnh sửa
  const { data: categoryData, isLoading, isError } = useQuery({
    queryKey: ['category', idParams],
    queryFn: () => getOneCate(idParams).then(response => response.data),
    enabled: isEditing,
  });

  // Cập nhật giá trị form khi dữ liệu đã được tải
  React.useEffect(() => {
    if (categoryData) {
      setValue("name", categoryData.name);
    }
  }, [categoryData, setValue]);

  // Hàm hủy bỏ
  const handleCancel = () => {
    reset();
    navigate("/admin/category");
  };

  // Hàm xử lý gửi form
  const handleSubmitForm = (data: FormData) => {
    if (isEditing) {
      updateCategoryMutation.mutate(data);
    } else {
      addCategoryMutation.mutate(data);
    }
  };

  return (
    <Box sx={{ m: "auto", width: 400 }}>
      <Typography variant="h4" align="center" mt={3} mb={2}>
        {isEditing ? "Chỉnh sửa danh mục" : "Thêm danh mục"}
      </Typography>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Stack spacing={2}>
          <TextField
            label="Tên"
            variant="outlined"
            fullWidth
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
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
    </Box>
  );
}
