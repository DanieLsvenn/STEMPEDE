import React, { useContext } from 'react'
import { Context } from '../context/Context'
import poraxy_banner from '../assets/banner/poraxy_banner.png'
import deuxper_banner from '../assets/banner/deuxper_banner.png'
import vex_banner from '../assets/banner/vex_banner.png'
import lego_banner from '../assets/banner/lego_banner.png'
import stemtoy_banner from '../assets/banner/stemtoy_banner.png'
import age_banner from '../assets/banner/age_banner.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import Items from '../components/Items'

import { useParams } from 'react-router-dom';

const ShopCategory = (props) => {
  const {all_product} = useContext(Context);
  const { category } = useParams();
  const isAgeCategory = ['3-7', '8-12', '13-17'].includes(category);
  return (
    <div>
        {category === 'poraxy' && (
            <img src={poraxy_banner} alt="Poraxy Banner" className="w-full h-[700px]" />
        )}
        {category === 'deuxper' && (
            <img src={deuxper_banner} alt="Deuxper Banner" className="w-full h-[700px]" />
        )}
        {category === 'vex' && (
            <img src={vex_banner} alt="Vex Banner" className="w-full h-[700px]" />
        )}
        {category === 'lego' && (
            <img src={lego_banner} alt="Lego Banner" className="w-full h-[700px]" />
        )}
        {category === 'stemtoy' && (
            <img src={stemtoy_banner} alt="Stem Toy Banner" className="w-full h-[900px]" />
        )}
        {isAgeCategory && (
        <img src={age_banner} alt={`${category} Banner`} className="w-full h-[900px]" />
        )}
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>

        <div>
          <p>
            <span>Showing 1-12</span> out of 40 products
          </p>

          <div className='flex'>
            Sort by <RiArrowDropDownLine />
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 mb-5 mx-[42.5rem]:'>
          {all_product.filter(item => isAgeCategory ? item.age === category : item.brand.toLowerCase() === category).map((item, i) => {
            return <Items key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
          })}
        </div>
    </div>
  )
}

export default ShopCategory