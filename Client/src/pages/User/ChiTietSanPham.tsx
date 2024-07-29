import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Container, Typography, Grid, TextField, CircularProgress } from "@mui/material";
import { IProduct } from "../../type/products.type";
import { getOneProduct } from "../../api/productApi";
import { toast } from "react-toastify";
import { addtoCartUser } from "../../api/cart";
import Header from "../../components/Header";
import BanerChitiet from "../../components/BanerChitiet";
import Footer from "../../components/Footer";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Features from "../../components/ingredient/Features";

export default function ChiTietSanPham() {
  const { id } = useParams();
  const idParams = id as string;
  const [getproduct, setProductList] = useState<IProduct>();
  const [buyCount, setBuyCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchProduct = async () => {
      try {
        console.log('Fetching product with ID:', idParams);
        const result = await getOneProduct(idParams);
        console.log('Fetch result:', result); // Log kết quả trả về từ API
        if (!result.data) {
          return toast.error("Không tìm thấy sản phẩm");
        }
        setProductList(result.data);
      } catch (error: any) {
        console.error('Error fetching product:', error); // Log lỗi nếu có
        toast.error(error.message);
      } finally {
        setLoading(false); // Đảm bảo rằng trạng thái loading được cập nhật khi hoàn thành
      }
    };

    fetchProduct();
  }, [idParams]);

  // Add to cart
  const addToCart = (buyCount: number, idPro: number) => {
    addtoCartUser(buyCount, idPro).then(() => {
      toast.success("Đặt hàng thành công");
    }).catch((error) => {
      toast.error(error.message);
    });
  };

  // Increase quantity
  const increaseQuantity = () => {
    setBuyCount(prevCount => prevCount + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    setBuyCount(prevCount => Math.max(prevCount - 1, 1));
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setBuyCount(value);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    ); // Hiển thị thông báo loading
  }

  if (!getproduct) {
    return (
      <Typography sx={{ textAlign: 'center', marginTop: '20px' }}>
        Không tìm thấy sản phẩm
      </Typography>
    ); // Hiển thị thông báo nếu không có dữ liệu sản phẩm
  }

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'white', paddingBottom: '50px' }}>
      <Header />
      <Container maxWidth={false} sx={{ px: 0 }}>
        <BanerChitiet productName={getproduct.name} /> {/* Truyền tên sản phẩm */}
        <Grid container spacing={4} sx={{ marginTop: '35px', marginBottom: '55px', px: 2 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', width: '100%', height: '500px' }}>
              <img
                src={getproduct.image}
                alt="Product"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">
              {getproduct.name}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {getproduct.price} đ
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginY: '8px' }}>
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} sx={{ color: '#FFD700' }} /> // Màu vàng cho các ngôi sao đầy
              ))}
              <Typography variant="body2" color="textSecondary" sx={{ marginLeft: '8px' }}>
                5 Customer Review
              </Typography>
            </Box>
            <Typography variant="body1" color="textSecondary" sx={{ marginY: '16px', opacity: 0.5 }}>
              {getproduct.description || 'Mô tả sản phẩm'}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              RAM
            </Typography>
            <Box sx={{ display: 'flex', gap: '16px', marginY: '8px' }}>
              {['128GB', '256GB', '360GB'].map((size, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? 'contained' : 'outlined'}
                  sx={{
                    backgroundColor: index === 0 ? '#d5a26e' : 'transparent', // Light brown color
                    color: index === 0 ? 'white' : '#d5a26e', // Text color for the button
                    fontSize: '1.2rem',
                    padding: '16px 32px',
                    borderRadius: '16px', // Larger border-radius for rounder corners
                    border: index !== 0 ? `2px solid #d5a26e` : 'none', // Border color
                    '&:hover': {
                      backgroundColor: index === 0 ? '#a87d5c' : '#d5a26e', // Darker brown on hover
                      color: 'white',
                    },
                  }}
                >
                  {size}
                </Button>
              ))}
            </Box>
            <Typography variant="body2" color="textSecondary">
              Color
            </Typography>
            <Box sx={{ display: 'flex', gap: '16px', marginY: '8px' }}>
              {['Đỏ', 'Xanh', 'Vàng'].map((color, index) => (
                <Box
                  key={index}
                  sx={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: index === 0 ? 'red' : index === 1 ? 'blue' : 'yellow',
                  }}
                />
              ))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginY: '16px' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#d5a26e', // Light brown color
                  color: 'white',
                  fontSize: '1.2rem',
                  padding: '8px',
                  borderRadius: '50%', // Circular button
                  width: '40px',
                  height: '40px',
                  minWidth: 'auto',
                  '&:hover': {
                    backgroundColor: '#a87d5c', // Darker brown on hover
                  },
                }}
                onClick={decreaseQuantity}
              >
                -
              </Button>
              <TextField
                type="number"
                value={buyCount}
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                sx={{ width: '80px', textAlign: 'center' }} // Tăng chiều rộng và căn giữa số
                InputProps={{ readOnly: true }} // Không cho phép người dùng thay đổi giá trị bằng cách nhập trực tiếp
              />
              <Button
                variant="contained"
                sx={{
                  textAlign: "center",
                  backgroundColor: '#d5a26e', // Light brown color
                  color: 'white',
                  fontSize: '1.2rem',
                  padding: '8px',
                  borderRadius: '50%', // Circular button
                  width: '40px',
                  height: '40px',
                  minWidth: 'auto',
                  '&:hover': {
                    backgroundColor: '#a87d5c', // Darker brown on hover
                  },
                }}
                onClick={increaseQuantity}
              >
                +
              </Button>
            </Box>
            <Box sx={{ display: 'flex', gap: '12px' }}>

              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: '#d5a26e', // Light brown color
                  color: 'white',
                  fontSize: '1.2rem',
                  padding: '16px 32px',
                  borderRadius: '16px', // Larger border-radius for rounder corners
                  '&:hover': {
                    backgroundColor: '#a87d5c', // Darker brown on hover
                  },
                }}
                onClick={() => {
                  if (getproduct && getproduct.id) {
                    const productId = Number(getproduct.id);
                    const validCount = buyCount > 0 ? buyCount : 1;
                    addToCart(validCount, productId);
                    
                  } else {
                    toast.error('Sản phẩm không hợp lệ');
                  }
                }}
                
              >
                Thêm vào giỏ hàng
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: '#d5a26e', // Light brown color
                  color: 'white',
                  fontSize: '1.2rem',
                  padding: '16px 32px',
                  borderRadius: '16px', // Larger border-radius for rounder corners
                  '&:hover': {
                    backgroundColor: '#a87d5c', // Darker brown on hover
                  },
                }}
                onClick={()=>{
                  navigate('/cart/checkout')
                }}
              >
                Thanh toán
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ width: '100%', textAlign: 'center', marginY: '40px' }}>
          <Typography variant="h5" component="h3" fontWeight="medium" color="textPrimary" sx={{ marginBottom: '16px' }}>
            Description
          </Typography>
        </Box>
        <Box sx={{ width: '100%', textAlign: 'justify', marginBottom: '40px' }}>
          <Typography variant="body1" color="textSecondary" sx={{ fontSize: '1.2rem', opacity: 0.8 }}>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </Typography>
        </Box>
        {/* Thay thế làm slider */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Box component="img" src="/group-107@2x.png" alt="" loading="lazy" sx={{ width: '100%', height: 'auto', objectFit: 'cover', minWidth: 393, minHeight: 348 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box component="img" src="/group-106@2x.png" alt="" loading="lazy" sx={{ width: '100%', height: 'auto', objectFit: 'cover', minWidth: 393, minHeight: 348 }} />
          </Grid>
        </Grid>
        {/* Thay thế làm slider */}
      </Container>
      <Features />
    </Box>
  );
}
