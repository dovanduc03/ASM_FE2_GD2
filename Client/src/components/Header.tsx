import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Container, MenuItem, Menu } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/Auth/AuthContext";


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

  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box display="flex" alignItems="center" flexGrow={1}>
            <Logo src="/meubel-house-logos05@2x.png" alt="Furniro" />
            <Typography variant="h6" component="a" href="/" sx={{ marginLeft: 2, textDecoration: 'none', color: 'inherit' }}>
              Furniro
            </Typography>
          </Box>
          <NavLinks>
            <NavItem>
              <Link to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link to='/'>Shop</Link>
            </NavItem>
            <NavItem >
              About
            </NavItem>
            <NavItem >
              Contact
            </NavItem>
            <Box display="flex" alignItems="center">
              {/* test */}
              <IconButton color="inherit" onClick={handleClick}>
                {/* Thay thế hình ảnh của biểu tượng bằng một biểu tượng tương tự */}
                <img src="/mdiaccountalertoutline.svg" alt="Account" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    width: 200,
                    maxWidth: '100%',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                {!isAuthenticated && ( // Nếu chưa xác thực, hiển thị Register và Login
                  <>
                    <MenuItem onClick={handleClose} component={Link} to="/register">
                      <Typography>Register</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/login">
                      <Typography>Login</Typography>
                    </MenuItem>
                  </>
                )}
                {isAuthenticated && ( // Nếu đã xác thực, hiển thị Profile và Logout
                  <>
                    <MenuItem onClick={handleClose} component={Link} to="/profile">
                      <Typography>Profile</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <Typography>Logout</Typography>
                    </MenuItem>
                  </>
                )}
              </Menu>
              {/* test */}
              <Icon color="inherit">
                <img src="/akariconssearch.svg" alt="Search" />
              </Icon>
              <Icon color="inherit">
                <img src="/akariconsheart.svg" alt="Wishlist" />
              </Icon>
              <Icon color="inherit">
                <img src="/antdesignshoppingcartoutlined.svg" alt="Cart" />
              </Icon>
            </Box>
          </NavLinks>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;