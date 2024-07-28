import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { http } from "../../api/http";
import { toast } from "react-toastify";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Grid,
} from "@mui/material";

const yupSchema = yup.object({
  email: yup
    .string()
    .required("Không được để trống")
    .email("Không đúng định dạng email"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu của bạn.")
    .min(8, "Mật khẩu của bạn quá ngắn."),
  confirmPassword: yup
    .string()
    .required("Vui lòng nhập lại mật khẩu của bạn.")
    .oneOf([yup.ref("password")], "Mật khẩu của bạn không khớp."),
});

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

export interface initialFormState {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<initialFormState>({
    defaultValues: initialState,
    resolver: yupResolver(yupSchema),
  });

  const handleSubmitForm = async (data: initialFormState) => {
    console.log(data, ":::::");
    try {
      const { confirmPassword, ...rest } = data;
      const result = await http.post("/register", { ...rest });
      if (result) {
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/login");
        toast.success("Đăng kí tài khoản thành công");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ backgroundColor: "background.default" }}
      >
        <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
          <Box textAlign="center" mb={2}>
            <Typography variant="h5" component="h1" gutterBottom>
              Tạo tài khoản
            </Typography>
            <Typography variant="body2">
              Tạo tài khoản để tận hưởng tất cả các dịch vụ mà không có bất kỳ quảng cáo nào tự do!
            </Typography>
          </Box>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  {...register("confirmPassword")}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Tạo tài khoản
                </Button>
              </Grid>
            </Grid>
          </form>
          <Box textAlign="center" mt={2}>
            <Typography variant="body2">
              Bạn đã có tài khoản?{" "}
              <Link to="/login" style={{ textDecoration: "none", color: "primary" }}>
                Đăng nhập
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
