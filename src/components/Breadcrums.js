import React from 'react'
import { PiArrowBendDownRightThin } from "react-icons/pi";

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='flex items-center gap-2 font-thin text-xl'>
        Home <PiArrowBendDownRightThin /> Products <PiArrowBendDownRightThin /> {product.brand} <PiArrowBendDownRightThin /> {product.name}
    </div>
  )
}

export default Breadcrums