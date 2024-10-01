import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums';
import ProductDisplay from '../components/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(Context) || {};
  const {productId} = useParams();
  const product = all_product ? all_product.find((e)=>e.id===Number(productId)) : null;
  return (
    <div>
      {product ? <Breadcrums product={product}/> : <p>Product not found</p>}
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
    
  )
}

export default Product