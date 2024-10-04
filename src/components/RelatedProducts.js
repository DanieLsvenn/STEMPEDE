import React from 'react'
import all_product from '../assets/products/data'
import Items from './Items'
import { Link } from 'react-router-dom'

const RelatedProducts = () => {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-semibold'>Related Products</h1>
        <hr className='py-0.5 w-64 mb-4 mt-2 bg-black'/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {all_product.map((item, i) => {
              return (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-lg shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 w-full object-cover rounded-md mb-4"
                  />
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-gray-500">{item.brand}</p>
                  <p className="text-lg font-semibold text-gray-700">
                    ${item.price}
                  </p>
                  <Link
                    to={`/product/${item.id}`}
                    className="block mt-4 bg-blue-500 text-white text-center py-2 rounded-md transition hover:bg-blue-600"
                  >
                    View Details
                  </Link>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default RelatedProducts