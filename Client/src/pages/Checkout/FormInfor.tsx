import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { createBill } from '../../api/bill'; // Đảm bảo bạn đã định nghĩa và xuất khẩu hàm createBill trong bill.ts

// Define validation schema with yup
const yupSchema = yup.object({
  name: yup.string().required("Không được để trống"),
  address: yup.string().required("Không được để trống"),
  phone: yup.string()
    .required("Vui lòng nhập SĐT của bạn.")
    .min(10, "Không đúng định dạng SĐT.")
    .max(11, "Không đúng định dạng SĐT."),
  info: yup.string().required("Không được để trống"),
});

const FormInfo: React.FC = () => {
  const {
    register,
    handleSubmit, // Lấy hàm handleSubmit từ useForm
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupSchema),
  });

  // Hàm xử lý khi form được submit
  const onSubmit = async (data: any) => {
    try {
      await createBill(data); // Gọi hàm tạo hóa đơn
      toast.success("Đặt hàng thành công");
    } catch (error: any) {
      toast.error("Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại.");
    }
  };

  return (
    <Box
      sx={{
        flex: '0.863',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: '35px',
        paddingLeft: '74px',
        paddingBottom: '71px',
        paddingRight: '74px',
        gap: '36px',
        minWidth: '395px',
        maxWidth: '100%',
        zIndex: 1,
        textAlign: 'left',
        color: 'black',
        fontFamily: 'Poppins',
        '@media (max-width:1125px)': {
          paddingTop: '5px',
          paddingBottom: '30px',
        },
        '@media (max-width:800px)': {
          gap: '18px',
          paddingLeft: '37px',
          paddingRight: '37px',
          minWidth: '100%',
        },
        '@media (max-width:450px)': {
          paddingBottom: '5px',
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          margin: 0,
          fontWeight: '600',
          fontSize: '1.5rem',
          '@media (max-width:800px)': {
            fontSize: '1.25rem',
          },
          '@media (max-width:450px)': {
            fontSize: '1rem',
          },
        }}
      >
        Recipient Information
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '100%' }} component="form" onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '36px', minWidth: '145px' }}>
          <Typography sx={{ fontWeight: '500' }}>Name</Typography>
          <TextField
            variant="outlined"
            placeholder="Enter your name"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{
              width: '100%',
              height: '75px',
              backgroundColor: 'white',
              borderColor: 'darkgray',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              },
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '36px', minWidth: '145px' }}>
          <Typography sx={{ fontWeight: '500' }}>Address</Typography>
          <TextField
            variant="outlined"
            placeholder="Enter your address"
            {...register("address")}
            error={!!errors.address}
            helperText={errors.address?.message}
            sx={{
              width: '100%',
              height: '75px',
              backgroundColor: 'white',
              borderColor: 'darkgray',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              },
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '36px', minWidth: '145px' }}>
          <Typography sx={{ fontWeight: '500' }}>Phone</Typography>
          <TextField
            variant="outlined"
            placeholder="Enter your phone number"
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            sx={{
              width: '100%',
              height: '75px',
              backgroundColor: 'white',
              borderColor: 'darkgray',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              },
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '36px', minWidth: '145px' }}>
          <Typography sx={{ fontWeight: '500' }}>Additional Information</Typography>
          <TextField
            variant="outlined"
            placeholder="Enter any additional information"
            multiline
            rows={4}
            {...register("info")}
            error={!!errors.info}
            helperText={errors.info?.message}
            sx={{
              width: '100%',
              height: '121px',
              backgroundColor: 'white',
              borderColor: 'darkgray',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              },
            }}
          />
        </Box>

        <Button type="submit" variant="contained" color="primary">
          Đặt hàng
        </Button>
      </Box>
    </Box>
  );
};

export default FormInfo;
