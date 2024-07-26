import React from 'react';
import { Typography, Container } from '@mui/material';

export default function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Quản lý sản phẩm
      </Typography>
    </Container>
  );
}
