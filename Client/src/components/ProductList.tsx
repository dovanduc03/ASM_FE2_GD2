import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { CircularProgress, Grid, Container } from '@mui/material';
import { IProduct } from '../type/products.type';
import ProductCard from './ProductCard';
import { productList1 } from '../api/productApi';
import BanerHome from './BanerHome';
import Header from './Header';
import Features from './ingredient/Features';
import Pagination from '@mui/material/Pagination';

export default function ProductList() {
  const { data, isLoading } = useQuery({
    queryKey: ['Products'],
    queryFn: productList1,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };
  

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = (data?.data as IProduct[])?.slice(indexOfFirstProduct, indexOfLastProduct);

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
            <>
              <Grid container spacing={4}>
                {currentProducts?.map((product) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Pagination
                  count={Math.ceil((data?.data as IProduct[])?.length / productsPerPage)}
                  page={currentPage}
                  onChange={handleChangePage}
                />
              </div>
            </>
          )}
        </Container>
      </section>
      <Features />
    </div>
  );
}