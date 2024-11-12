// import "./App.css";
// import { Outlet } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Header />

//         <Outlet />

//       <Footer />
//     </>
//   );
// }

// export default App;

import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import DashboardPage from "./pages/DashboardPage";
import ProductDetail from "./pages/ProductDetail";
import Product from "./pages/Product";
import ProductPage from "./pages/ProductPage";
import Documentation from "./pages/Documentation";
import Profile from "./pages/Profile";
import LabSpecial from "./pages/LabSpecial";
import RequireAuth from "./components/RequireAuth";
import { Routes, Route } from 'react-router-dom';
import Layout from "./routes/Layout";
import useAuth from "./hooks/useAuth";

const ROLES = {
  Customer: 'Customer',
  Manager: 'Manager',
  Staff: 'Staff'
}

function App() {
  const accessToken = localStorage.getItem("accessToken")
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="" element={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="forgot-password" element={<ForgotPassword/>} />
        <Route path="sign-up" element={<SignUp/>} />
        <Route path="shop-category/:category" element={<ShopCategory/>} />
        <Route path="product" element={<ProductPage />}>
          <Route path=":productId" element={<ProductDetail />} />
          <Route path="" element={<Product />} />
        </Route>
        <Route path="documentation" element={<Documentation/>} />
        <Route path="lab-special" element={<LabSpecial/>} />

        {/* protected routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Customer, ROLES.Manager, ROLES.Staff]}/>}>
          <Route path="cart" element={<Cart/>} />
          <Route path="profile" element={accessToken ? <Profile/> : <Login />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Manager, ROLES.Staff]}/>}>
          <Route path="dashboard" element={<DashboardPage/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
