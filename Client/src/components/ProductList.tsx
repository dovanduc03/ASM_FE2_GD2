import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { CircularProgress, Grid, Container } from '@mui/material';
import { IProduct } from '../type/products.type';
import ProductCard from './ProductCard';
import { productList1 } from '../api/productApi';
import BanerHome from './BanerHome';
import Header from './Header';
import Features from './ingredient/Features';

export default function ProductList() {
  // Gọi useQuery chỉ một lần
  const { data, isLoading } = useQuery({
    queryKey: ['Products'],
    queryFn: productList1, // Đảm bảo productList1 trả về dữ liệu đúng định dạng
  });

  return (
    <div className="w-full relative bg-color-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Header />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[46px] box-border gap-[1px] max-w-full mq450:pb-[30px] mq450:box-border">
        <BanerHome />
      </section>
      <section className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[85px] box-border max-w-full mq800:pb-[23px] mq800:box-border mq1125:pb-9 mq1125:box-border mq1350:pb-[55px] mq1350:box-border">
        <Container
          maxWidth="xl"
          sx={{
            mt: 4,
            px: { xs: 2, sm: 3, md: 4 },
            mx: 'auto',
            width: '100%',
            maxWidth: '1200px',
          }}
        >
          {isLoading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress size={60} />
            </div>
          ) : (
            <Grid container spacing={4}>
              {(data?.data as IProduct[]).map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </section>
      <Features /> {/* Đảm bảo component Features được nhập và sử dụng đúng cách */}
    </div>
  );
}
