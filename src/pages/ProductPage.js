import { Outlet } from "react-router-dom";

function ProductPage() {
  return (
    <div className="px-20">
      <Outlet />
    </div>
  );
}

export default ProductPage;
