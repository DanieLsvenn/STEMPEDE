import React from 'react'
import data_product from '../assets/products/data'
import Items from './Items'

const BestSeller = () => {
  return (
    <div className='py-12 flex flex-col items-center gap-2.5'>
        <h1 className='text-black font-bold text-4xl'>Best Seller</h1>
        <hr className='w-52 h-2 rounded-xl bg-black' />
        <div className='mt-12 flex gap-7'>
            {data_product.map((item, i) => {
                return <Items key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
            })}
        </div>
    </div>
  )
}

export default BestSeller