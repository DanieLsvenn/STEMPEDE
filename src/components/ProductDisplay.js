import React, { useContext } from 'react'
import { Context } from '../context/Context';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart} = useContext(Context);
  return (
    <div className='flex mx-[170px]'>
        <div className="flex gap-[17px]">
            <div className='flex flex-col gap-[16px]'>
                <img className="h-[163px]" src={product.image} alt="" />
                <img className="h-[163px]" src={product.image} alt="" />
                <img className="h-[163px]" src={product.image} alt="" />
                <img className="h-[163px]" src={product.image} alt="" />
            </div>

            <div className="flex">
                <img className='w-[586px] h-[700px]' src={product.image} alt="" />
            </div>
        </div>

        <div className="mx-[17px] flex flex-col">
            <h1 className='text-[#3d3d3d] text-[40px] font-bold'>{product.name}</h1>
            <div className="flex items-center mt-[13px] gap-[5px] text-[#1c1c1c]">
                <span className="text-2xl">⭐</span>
                <span className="text-2xl">⭐</span>
                <span className="text-2xl">⭐</span>
                <span className="text-2xl">⭐</span>
                <span className="text-2xl">⭐</span>
                <p>(122)</p>
            </div>

            <div className="flex my-[40px] gap-[30px] text-[24px] font-bold">
                <div className="text-[#ff4141]">${product.price}</div>
            </div>

            <div className="text-[13px]">
                A modern spin ode to the classic design of the Iphone case. Slick and Alluring, featuring in  Black, White, Purple, Red and Yellow.
            </div>

            <div>
                <h1 className='mt-[55px] text-[#656565] text-[20px] font-semibold'>Select Your Color</h1>
                <div className="flex mt-[30px] gap-[20px]">
                    <div className="p-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">Black</div>
                    <div className="p-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">White</div>
                    <div className="p-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">Purple</div>
                    <div className="p-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">Red</div>
                    <div className="p-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">Yellow</div>
                </div>
            </div>

            <button onClick={()=>{addToCart(product.id)}} className="py-[20px] px-[40px] w-[200px] text-[16px] font-semibold text-white bg-[#ff4141] mb-[40px] border-none outline-none cursor-pointer">ADD TO CART</button>
            <p className='mt-[10px]'><span className="font-semibold">Category: </span>Stem</p>
            <p className='mt-[10px]'><span className="font-semibold">Tags: </span>Brand, Age</p>
        </div>
    </div>
  )
}

export default ProductDisplay