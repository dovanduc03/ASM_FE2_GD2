import React, { useMemo, useState } from "react";
import { Button, Container, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { cateList } from "../../../api/categories";
import { createProducts } from "../../../api/productApi";
import { IProduct } from "../../../type/products.type";
import { useLoading } from "../../../contexts/loading";

const validateForm = yup.object({
  name: yup.string().required("Tên là bắt buộc"),
  description: yup.string().required("Mô tả là bắt buộc"),
  categoryId: yup.string().required("Danh mục là bắt buộc"),
  image: yup.mixed().required("Tệp là bắt buộc"),
  price: yup.string().required("Giá là bắt buộc"),
});

type ProductForm = Omit<IProduct, "id">;
const initialFormState = {
  name: "",
  description: "",
  image: "",
  price: "",
  categoryId: "",
};
type FormData = yup.InferType<typeof validateForm>;

export default function AddProduct() {
  const [fileImage, setFileImage] = useState<File>();
  const navigate = useNavigate();
  const { loading, setLoading } = useLoading(); // Sử dụng context loading

  const PreviewImage = useMemo(() => {
    return fileImage ? URL.createObjectURL(fileImage) : "";
  }, [fileImage]);

  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    defaultValues: initialFormState,
    resolver: yupResolver(validateForm),
  });

  const avatar = watch("image");

  const handleInputFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileName = e.target.files?.[0];
    if (fileName) {
      setFileImage(fileName);
    }
  };

  const addProductMutation = useMutation({
    mutationFn: (body: ProductForm) => createProducts({ data: body }),
    onSuccess() {
      reset();
      toast.success("Thêm thành công");
      navigate("/admin/products");
    },
    onError() {
      toast.error("Có lỗi xảy ra khi thêm sản phẩm");
    },
    onMutate() {
      setLoading(true); // Đặt loading thành true khi mutation bắt đầu
    },
    onSettled() {
      setLoading(false); // Đặt loading thành false khi mutation hoàn tất
    },
  });

  const { data: categoryList, isLoading, isError } = useQuery({
    queryKey: ["getCategory"],
    queryFn: cateList,
  });

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
      reader.onerror = (error) => {
        console.error("Lỗi khi chuyển tệp sang base64:", error);
        reject(error);
      };
    });
  };

  const handleSubmitForm = async (data: FormData) => {
    try {
      let base64Image;
      if (fileImage) {
        base64Image = await convertToBase64(fileImage);
      }
      await addProductMutation.mutateAsync({
        ...data,
        image: base64Image || "",
      });
    } catch (error) {
      console.error("Lỗi khi gửi biểu mẫu:", error);
    }
  };

  return (
    <>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div
            className="w-16 h-16 border-4 border-dashed rounded-full animate-spin"
            style={{ borderColor: "#8B5CF6", borderTopColor: "transparent" }}
          ></div>
        </div>
      ) : (
        <>
          <Typography variant="h4" align="center" mt={3} fontWeight="bold">
            Thêm Sản Phẩm
          </Typography>
          <Container
            sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
          >
            <form onSubmit={handleSubmit(handleSubmitForm)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Tên"
                    variant="outlined"
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Giá"
                    variant="outlined"
                    type="number"
                    {...register("price")}
                    error={!!errors.price}
                    helperText={errors.price?.message}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    select
                    fullWidth
                    label="Danh mục"
                    variant="outlined"
                    {...register("categoryId")}
                    error={!!errors.categoryId}
                    helperText={errors.categoryId?.message}
                    value={watch("categoryId") || ''}
                  >
                    <MenuItem value="">Chọn danh mục</MenuItem>
                    {categoryList?.data?.map((item: any) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <div className="mb-6 border border-green-400">
                    <div className="max-w-20">
                      <img
                        src={PreviewImage || (avatar ? (avatar as string) : '')}
                        alt=""
                        style={{ maxWidth: "100%", maxHeight: "100px", objectFit: "cover" }}
                      />
                    </div>
                    <input type="file" {...register("image")} onChange={handleInputFile} />
                    <p style={{ color: "red", marginTop: "5px" }}>{errors.image?.message}</p>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    multiline
                    rows={3}
                    fullWidth
                    label="Mô tả"
                    variant="outlined"
                    {...register("description")}
                    error={!!errors.description}
                    helperText={errors.description?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    disabled={loading}
                    type="submit"
                    sx={{
                      bgcolor: "#8B5CF6",
                      color: "white",
                      "&:hover": { bgcolor: "#6D28D9" },
                    }}
                  >
                    Tạo mới
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </>
      )}
    </>
  );
}
