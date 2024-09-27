import React from 'react'
import './css/Items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className='items'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=''/></Link>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='text-gray-800 text-lg font-semibold'>
                ${props.price}
            </div>
        </div>
    </div>
  )
}

export default Items