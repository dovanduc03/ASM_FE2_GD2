import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Container,
  MenuItem,
  Menu,
  InputBase,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/Auth/AuthContext";
import { Search } from "@mui/icons-material";
import { toast } from "react-toastify";
import useMediaQuery from '@mui/material/useMediaQuery';

const Logo = styled('img')({
  height: '32px',
});

const NavLinks = styled(Box)({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'space-between',
});

const NavItem = styled(MenuItem)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  "& a": {
    color: "inherit",
    textDecoration: 'none',
  },
  "& a:hover": {
    textDecoration: 'none',
  },
}));

const Icon = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const matches = useMediaQuery((theme: any) => theme.breakpoints.up('md'));

  const open = Boolean(anchorEl);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
    handleClose();
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5001/products?name_like=${searchQuery}`);
      const results = await response.json();
      setSearchResults(results);
      setDialogOpen(true);

    } catch (error) {
      toast.error('Lỗi khi tìm kiếm:');
    } finally {
      setLoading(false);
    }
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    if (menuAnchorEl) {
      setMenuAnchorEl(null);
    } else {
      setMenuAnchorEl(event.currentTarget);
    }
  };

  const handleItemClick = (path: string) => {
    setMenuAnchorEl(null);
    navigate(path);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  return (
    <>
      <AppBar position="sticky" color="default">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={6} md={2} display="flex" alignItems="center">
                <Logo src="/meubel-house-logos05@2x.png" alt="Furniro" />
                {matches && (
                  <Typography variant="h6" component="a" href="/" sx={{ marginLeft: 2, textDecoration: 'none', color: 'inherit' }}>
                    Furniro
                  </Typography>
                )}
              </Grid>
              {matches && (
                <Grid item md={6} display="flex" justifyContent="center">
                  <NavLinks>
                    <NavItem>
                      <Link to='/'>Home</Link>
                    </NavItem>
                    <NavItem>
                      <Link to='/'>Shop</Link>
                    </NavItem>
                    <NavItem>About</NavItem>
                    <NavItem>Contact</NavItem>
                  </NavLinks>
                </Grid>
              )}
              <Grid item xs={6} md={4} display="flex" alignItems="center" justifyContent="flex-end">
                <Box
                  component="form"
                  sx={{ display: 'flex', alignItems: 'center', mr: 2 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                  }}
                >
                  <InputBase
                    placeholder="Bạn đang tìm kiếm gì?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ ml: 1, flex: 1 }}
                  />
                  <IconButton type="submit" sx={{ p: 1 }}>
                    <Search />
                  </IconButton>
                </Box>
                <IconButton color="inherit" onClick={handleMenuClick} sx={{ mr: 1 }}>
                  <img src="/mdiaccountalertoutline.svg" alt="Account" />
                </IconButton>
                <Menu
                  anchorEl={menuAnchorEl}
                  open={Boolean(menuAnchorEl)}
                  onClose={handleCloseMenu}
                > 
                  <MenuItem onClick={() => handleItemClick('/admin')} sx={{ p: 2 }}>
                    Admin
                  </MenuItem>
                  <MenuItem onClick={() => handleItemClick('/login')} sx={{ p: 2 }}>
                    Login
                  </MenuItem>
                  <MenuItem onClick={() => handleItemClick('/register')} sx={{ p: 2 }}>
                    Register
                  </MenuItem>
                </Menu>
                <Icon color="inherit">
                  <Link to={'/like'}>
                    <img src="/akariconsheart.svg" alt="Wishlist" />
                  </Link>
                </Icon>
                <Icon color="inherit">
                  <img src="/antdesignshoppingcartoutlined.svg" alt="Cart" onClick={() => navigate('/cart')} />
                </Icon>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Search Results Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Tìm kiếm</DialogTitle>
        <DialogContent>
          {loading ? (
            <CircularProgress />
          ) : (
            <Box>
              {searchResults.length > 0 ? (
                searchResults.map((product: any) => (
                  <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                      <img src={product.image} alt={product.name} style={{ width: 50, height: 50, marginRight: 16 }} />
                      <Box>
                        <Typography variant="body1">{product.name}</Typography>
                        <Typography variant="body2">${product.price}</Typography>
                      </Box>
                    </Box>
                  </Link>
                ))
              ) : (
                <Typography variant="body1">Không có kết quả</Typography>
              )}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Header;
