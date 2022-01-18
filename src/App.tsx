import React, { Suspense, useState, useCallback, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Helpers/Theme/index";
import { GlobalStyles } from "./Helpers/globalStyle";
import { Routes, Route, Navigate } from "react-router";
import SppinerLoading from "./Components/Elements/SppinerLoading/index";
import Header from "./Components/Header";
const HomePage = React.lazy(() => import("./Pages/HomePage"));
const LoginPage = React.lazy(() => import("./Pages/AuthPages/LoginPage"));
const SignUpPage = React.lazy(() => import("./Pages/AuthPages/SignUpPage"));
const CreateProductPage = React.lazy(() => import("./Pages/CreateProductPage"));
const ProductPage = React.lazy(() => import("./Pages/ProductPage"));
const ProfilePage = React.lazy(() => import("./Pages/ProfilePage"));
const ReviewPage = React.lazy(() => import("./Pages/ReviewPage"));
const SearchPage = React.lazy(() => import("./Pages/SearchPage"));
const NotFoundPage = React.lazy(() => import("./Pages/NotFoundPage"));
const PaymentPage = React.lazy(() => import("./Pages/PaymentPage"));
const SuccessPage = React.lazy(() => import("./Pages/SuccessPage"));
const CartPage = React.lazy(() => import("./Pages/CartPage"));
const OrdersAdminPage = React.lazy(
  () => import("./Pages/AdminPages/OrdersAdminPage")
);
const ProductsAdminPage = React.lazy(
  () => import("./Pages/AdminPages/ProductsAdminPage")
);
const UsersAdminPage = React.lazy(
  () => import("./Pages/AdminPages/UsersAdminPage")
);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }, [theme]);

  useEffect(() => {
    let theme_ = localStorage.getItem("theme");

    if (theme_) {
      setTheme(theme_);
    }
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<SppinerLoading />}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles {...(theme === "dark" ? darkTheme : lightTheme)} />
          {/* add header  */}
          <Header isLoggedIn={true} />

          <Routes>
            {/* Auth */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            {/* Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/search/:keyword" element={<SearchPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            {/* product pages */}
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/product/create" element={<CreateProductPage />} />
            <Route path="/product/payment" element={<PaymentPage />} />
            <Route path="/product/review/:id" element={<ReviewPage />} />
            {/* Admin Page */}
            <Route path="/admin/users" element={<UsersAdminPage />} />
            <Route path="/admin/products" element={<ProductsAdminPage />} />
            <Route path="/admin/orders" element={<OrdersAdminPage />} />
            {/* notFoundPage */}
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </ThemeProvider>
      </Suspense>
    </div>
  );
}

export default App;
