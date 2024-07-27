import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Features from '../../components/ingredient/Features';
import Footer from '../../components/Footer';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box>
      <Header />
    <Box 
    
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        bgcolor: 'background.default',
        p: 3,
      }}
    >
      
      <Typography variant="h1" component="div" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        Page Not Found
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Go Home
      </Button>
      
    </Box>
    <Footer/>
    </Box>
  );
}
