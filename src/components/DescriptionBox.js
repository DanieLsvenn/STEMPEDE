import React from 'react'
import './css/DescriptionBox.css'
import all_product from '../assets/products/all_products'
import { useParams } from 'react-router-dom';

const DescriptionBox = () => {
  const { productId } = useParams();
  const product = all_product.find((p) => p.id === parseInt(productId));
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (10)</div>
        </div>

        <div className="descriptionbox-description">
            <p>{product.description}</p>
        </div>
    </div>
  )
}

export default DescriptionBox