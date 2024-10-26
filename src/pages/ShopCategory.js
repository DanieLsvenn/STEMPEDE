import React, { useContext } from 'react'
import { CartContext } from '../context/MergedProvider'
import poraxy_banner from '../assets/banner/poraxy_banner.png'
import deuxper_banner from '../assets/banner/deuxper_banner.png'
import vex_banner from '../assets/banner/vex_banner.png'
import lego_banner from '../assets/banner/lego_banner.png'
import stemtoy_banner from '../assets/banner/stemtoy_banner.png'
import age_banner from '../assets/banner/age_banner.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import Items from '../components/Items'

import { Link, useParams } from 'react-router-dom';

const ShopCategory = (props) => {
  const {all_product} = useContext(CartContext);
  const { category } = useParams();
  const isAgeCategory = ['3-7', '8-12', '13-17'].includes(category);
  return (
    <div>
        {category === 'poraxy' && (
            <img src={poraxy_banner} alt="Poraxy Banner" className="w-full h-[600px] object-cover" />
        )}
        {category === 'deuxper' && (
            <img src={deuxper_banner} alt="Deuxper Banner" className="w-full h-[600px] object-cover" />
        )}
        {category === 'vex' && (
            <img src={vex_banner} alt="Vex Banner" className="w-full h-[600px] object-cover" />
        )}
        {category === 'lego' && (
            <img src={lego_banner} alt="Lego Banner" className="w-full h-[600px] object-cover" />
        )}
        {category === 'stemtoy' && (
            <img src={stemtoy_banner} alt="Stem Toy Banner" className="w-full h-[600px] object-cover" />
        )}
        {isAgeCategory && (
        <img src={age_banner} alt={`${category} Banner`} className="w-full h-[600px] object-cover" />
        )}

        <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-10">Our {category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {all_product.filter(item => isAgeCategory ? item.age === category : item.brand.toLowerCase() === category).map((item, i) => {
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
      </div>
    </div>
  )
}

export default ShopCategory