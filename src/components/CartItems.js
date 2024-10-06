import React, { useContext } from 'react'
import './css/CartItems.css'
import { Context } from '../context/Context'
import { RxCross2 } from "react-icons/rx";
import { RiArrowLeftDoubleFill } from "react-icons/ri";

const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(Context)
  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div key={e.id}>
                    <div className='cartitems-format cartitems-format-main'>
                        <img src={e.image} alt='' className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>${e.price*cartItems[e.id]}</p>
                        <RxCross2 onClick={()=>{removeFromCart(e.id)}}/>
                    </div>
                </div>
            }
            return null;
        })}
        <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h1>Cart Total</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <p>Shipping Fee: </p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button className='rounded-lg bg-blue-500 transition-all hover:bg-blue-700 hover:scale-105'>PROCEED TO CHECKOUT</button>
                <div className='flex items-justify-start rounded-lg text-blue-500 hover:text-blue-700 underline'><RiArrowLeftDoubleFill /> Back to products</div>
            </div>
        </div>
    </div>
  )
}

export default CartItems