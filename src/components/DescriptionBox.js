import React, { useEffect, useState } from "react";
import "./css/DescriptionBox.css";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/product";

const DescriptionBox = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
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
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (10)</div>
      </div>

      <div className="descriptionbox-description">
        <p>{product && product.description}</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
