import React, { useEffect, useState } from "react";
import { Button, Container, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { cateList } from "../../../api/categories";
import { IProduct } from "../../../type/products.type";
import { useLoading } from "../../../contexts/loading";

const validateForm = yup.object({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  categoryId: yup.string().required("Category is required"),
  image: yup.mixed().required("Image is required"),
  price: yup.string().required("Price is required"),
});

type FormData = yup.InferType<typeof validateForm>;

export default function EditProduct() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | undefined>();
  const { loading, setLoading } = useLoading();
  const navigate = useNavigate();

  // Fetch product details
  useEffect(() => {
    if (id) {
      axios.get<IProduct>(`http://localhost:3000/products/${id}`)
        .then(({ data }) => setProduct(data))
        .catch((error) => console.error("Error fetching product: ", error));
    }
  }, [id]);

  const { data: categoryList } = useQuery({
    queryKey: ["getCategory"],
    queryFn: cateList,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
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

  // Pre-fill form with product data
  useEffect(() => {
    if (product) {
      setValue("name", product.name);
      setValue("description", product.description);
      setValue("categoryId", product.categoryId);
      setValue("price", product.price);
      setValue("image", product.image);
    }
  }, [product, setValue]);

  // Handle form submission
  const mutation = useMutation({
    mutationFn: (values: FormData) => {
      console.log("Updating product with ID:", id);
      return axios.put(`http://localhost:3000/products/${id}`, values);
    },
    onSuccess: () => {
      toast.success("Product updated successfully");
      navigate("/admin/products");
    },
    onError: (error) => {
      console.error("Error updating product:", error);
      toast.error("Error updating product");
    },
    onMutate: () => {
      setLoading(true);
    },
    onSettled: () => {
      setLoading(false);
    },
  });
  

  const onSubmit = async (data: FormData) => {
    try {
      await mutation.mutateAsync(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" mt={3} fontWeight="bold">
        Edit Product
      </Typography>
      {product ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Price"
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
                label="Category"
                variant="outlined"
                {...register("categoryId")}
                error={!!errors.categoryId}
                helperText={errors.categoryId?.message}
                value={watch("categoryId") || ''}
              >
                <MenuItem value="">Choose a category</MenuItem>
                {categoryList?.data?.map((item: any) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                rows={3}
                fullWidth
                label="Description"
                variant="outlined"
                {...register("description")}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <div className="mb-6 border border-green-400">
                <div className="max-w-20">
                  <img
                    src={watch("image") ? (watch("image") as string) : ''}
                    alt="Product"
                    style={{ maxWidth: "100%", maxHeight: "100px", objectFit: "cover" }}
                  />
                </div>
                <input type="file" {...register("image")} />
                <p style={{ color: "red", marginTop: "5px" }}>{errors.image?.message}</p>
              </div>
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
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Container>
  );
}
