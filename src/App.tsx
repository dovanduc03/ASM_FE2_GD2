import React from "react";
import { useRoutes } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import MainLayout from "./pages/Admin/layouts/MainLayout";
import Dashboard from "./pages/Admin/Dashboard";
import AddCate from "./pages/Admin/category/AddCate";
import ListCate from "./pages/Admin/category/ListCate";
import Addproduct from "./pages/Admin/products/Addproduct";
import ListProduct from "./pages/Admin/products/ListProduct";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./pages/Auth/AuthContext";
import CaHng from "./pages/CaHng";
import ChiTitSnPhm from "./pages/ChiTitSnPhm";
import ProductCard from "./components/ProductCard";
import GiHng from "./pages/GiHng";
import ThanhTon from "./pages/ThanhTon";

// Tạo QueryClient
const queryClient = new QueryClient();

// Định nghĩa cấu hình routes
const routeConfig = [
  {
    path: "/",
    element: <CaHng />,
    children: [
      { path: "", element: <CaHng /> },
      { path: "product", element: <ProductCard /> },
      { path: ":id/product", element: <ChiTitSnPhm /> },
    ],
  },
  {
    path: "/cart",
    element: <GiHng />,
    children: [
      { path: "", element: <GiHng /> },
      { path: "checkout", element: <ThanhTon /> },
    ],
  },
  {
    path: "/admin",
    element: <MainLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "products", element: <ListProduct /> },
      { path: "product/add", element: <Addproduct /> },
      { path: "product/:id/edit", element: <Addproduct /> },
      { path: "category", element: <ListCate /> },
      { path: "category/add", element: <AddCate /> },
      { path: "category/:id/edit", element: <AddCate /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
];

// Component quản lý routes
function AppRoutes() {
  return useRoutes(routeConfig);
}

// Tạo theme Material-UI
const theme = createTheme({
  // Customize your theme here
});

// Component chính
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <main>
            <AppRoutes />
          </main>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
