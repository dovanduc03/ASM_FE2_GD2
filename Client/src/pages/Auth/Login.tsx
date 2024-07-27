import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { getUserLS, http } from "../../api/http";
import { toast } from "react-toastify";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  Divider,
  CircularProgress,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const yupSchema = yup.object({
  email: yup
    .string()
    .email("Email không đúng định dạng")
    .required("Bạn không được để trống"),
  password: yup.string().required("Bạn không được để trống"),
});

const initialState = {
  email: "",
  password: "",
};

export interface initialFormState {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<initialFormState>({
    defaultValues: initialState,
    resolver: yupResolver(yupSchema),
  });

  

  const handleOnSubmit = async (data: initialFormState) => {
    setLoading(true);
    try {
      const result = await http.post("signin", data);
      if (result && result.data) {
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/");
        toast.success("Đăng nhập tài khoản thành công");
      } else {
        toast.error("Đăng nhập thất bại, vui lòng thử lại.");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Đã xảy ra lỗi, vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F8F8",
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          p: 4,
          bgcolor: "background.paper",
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Đăng nhập
        </Typography>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            variant="outlined"
          />
          <Box sx={{ textAlign: "right", mb: 2 }}>
            <Link to="#" style={{ textDecoration: "none", color: "grey" }}>
              Quên mật khẩu?
            </Link>
          </Box>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mb: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Đăng nhập"}
          </Button>
        </form>
        <Divider sx={{ my: 2 }}>Hoặc đăng nhập bằng</Divider>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <IconButton>
            <GoogleIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Chưa có tài khoản?{" "}
          <Link to="/register" style={{ textDecoration: "none", color: "primary" }}>
            Đăng ký
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
