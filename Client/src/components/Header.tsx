import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Container, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

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
}));

const Icon = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

const Header: React.FC = () => {
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
            <NavItem >
              Home
            </NavItem>
            <NavItem  >
              Shop
            </NavItem>
            <NavItem >
              About
            </NavItem>
            <NavItem >
              Contact
            </NavItem>
            <Box display="flex" alignItems="center">
              <Icon color="inherit">
                <img src="/mdiaccountalertoutline.svg" alt="Account" />
              </Icon>
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
