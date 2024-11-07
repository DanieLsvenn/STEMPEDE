// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import ForgotPassword from "../pages/ForgotPassword";
// import SignUp from "../pages/SignUp";
// import ShopCategory from "../pages/ShopCategory";
// import Cart from "../pages/Cart";
// import DashboardPage from "../pages/DashboardPage";
// import ProductDetail from "../pages/ProductDetail";
// import Product from "../pages/Product";
// import ProductPage from "../pages/ProductPage";
// import Documentation from "../pages/Documentation";
// import Profile from "../pages/Profile";
// import LabSpecial from "../pages/LabSpecial";
// import RequireAuth from "../components/RequireAuth";
// import PersistLogin from "../components/PersistLogin";

// const ROLES = {
//   Customer: 'Customer',
//   Manager: 'Manager',
//   Staff: 'Staff'
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />, // App serves as the layout container
//     children: [
//       // Public routes
//       { path: "", element: <Home /> },
//       { path: "login", element: <Login /> },
//       { path: "forgot-password", element: <ForgotPassword /> },
//       { path: "sign-up", element: <SignUp /> },
//       { path: "shop-category/:category", element: <ShopCategory /> },
//       {
//         path: "product",
//         element: <ProductPage />,
//         children: [
//           {
//             path: ":productId",
//             element: (
//                 <ProductDetail />
//             ),
//           },
//           { path: "", element: <Product /> },
//         ],
//       },
//       { path: "documentation", element: <Documentation /> },
//       { path: "labspecial", element: <LabSpecial /> },

//       // Protected routes wrapped in PersistLogin and RequireAuth for authorization
//       {
//         element: (
//             <RequireAuth allowedRoles={[ROLES.Customer, ROLES.Manager, ROLES.Staff]} />
//         ),
//         children: [
//           { path: "cart", element: <Cart /> },
//           { path: "profile", element: <Profile /> },
//         ],
//       },
//     ],
//   },

//   {
//     path: "/dashboard",
//     element: (
//         <RequireAuth allowedRoles={[ROLES.Manager, ROLES.Staff]} />
//     ),
//     children: [
//       { index: true, element: <DashboardPage /> }, // Default route for /dashboard
//     ],
//   },
// ]);

// export default router;

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
    return (
      <main className="App">
        <Header />
  
          <Outlet />
  
        <Footer />
      </main>
    );
  }
  
  export default Layout;