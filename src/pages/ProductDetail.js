import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { CartContext } from "../context/MergedProvider";
import DescriptionBox from "../components/DescriptionBox";
import RelatedProduct from "../components/RelatedProducts";
import { fetchProductById } from "../api/product";

const ProductDetail = () => {
  const { productId } = useParams(); // Get the product ID from the URL params
  const [product, setProduct] = useState(null); // State for product
  const { addToCart } = useContext(CartContext); //Add to cart function
  useEffect(() => {
    const getProduct = async () => {
      if (!productId) {
        console.error("Product ID is undefined");
        return;
      }
      try {
        const fetchedProduct = await fetchProductById(productId);
        if (fetchedProduct && fetchedProduct.success) {
          setProduct(fetchedProduct.data);
        } else {
          console.error("Product not found:", fetchedProduct);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };
    getProduct();
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 pt-10">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <img
                src={product.image}
                alt={product.productName}
                className="h-80 w-full object-cover rounded-md mb-4"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
              <p className="text-xl text-gray-500 mb-2">
                Brand: {product.subcategoryName}
              </p>
              <p className="text-xl text-gray-500 mb-2">Age: {product.ages}</p>
              <p className="text-2xl font-semibold text-gray-800 mb-6">
                ${product.price}
              </p>
              <button
                onClick={() => {
                  addToCart(product.productID);
                }}
                className="bg-blue-500 text-white px-5 py-2 rounded-md transition-all hover:bg-blue-700"
              >
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

      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default ProductDetail;
