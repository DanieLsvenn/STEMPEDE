import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import ShopCategory from "../pages/ShopCategory";
import Cart from "../pages/Cart";
import DashboardPage from "../pages/DashboardPage";
import ProductDetail from "../pages/ProductDetail";
import Product from "../pages/Product";
import ProductPage from "../pages/ProductPage";
import Documentation from "../pages/Documentation";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "shop-category/:category",
        element: <ShopCategory />,
      },
      {
        path: "product",
        element: <ProductPage />,
        children: [
          {
            path: ":productId",
            element: <ProductDetail />,
          },
          {
            path: "",
            element: <Product />,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "documentation",
        element: <Documentation />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

export default router;
