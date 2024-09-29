import React from "react";
import { Link, useParams } from "react-router-dom";
import all_product from "./../assets/products/all_products"; // Your product array data
import { useEffect } from "react";
const ProductDetail = () => {
  const { productId } = useParams(); // Get the product ID from the URL params
  const product = all_product.find((p) => p.id === parseInt(productId)); // Find the product by ID
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 pt-72">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <img
                src={product.image}
                alt={product.name}
                className="h-80 w-full object-cover rounded-md mb-4"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-xl text-gray-500 mb-2">
                Brand: {product.brand}
              </p>
              <p className="text-2xl font-semibold text-gray-800 mb-6">
                ${product.price}
              </p>
              <button className="bg-blue-500 text-white px-5 py-2 rounded-md transition hover:bg-blue-600">
                Add to Cart
              </button>
              <Link to="/product">
                <button className="ml-4 bg-gray-500 text-white px-5 py-2 rounded-md transition hover:bg-gray-600">
                  Back to Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
