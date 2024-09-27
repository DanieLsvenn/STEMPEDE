import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums';
import ProductDisplay from '../components/ProductDisplay';

const Product = () => {
  const {all_product} = useContext(Context) || {};
  const {productId} = useParams();
  const product = all_product ? all_product.find((e)=>e.id===Number(productId)) : null;
  console.log('All Products:', all_product);
  console.log('Product ID:', productId);
  console.log('Found Product:', product);
  return (
    <div>
      {product ? <Breadcrums product={product}/> : <p>Product not found</p>}
      <ProductDisplay product={product}/>
    </div>
    
  )
}

export default Product