import React from 'react'

const Items = (props) => {
  return (
    <div>
        <img src={props} alt='' />
        <p>{props.name}</p>
        <div>
            <div>
                {props.price}
            </div>
        </div>
    </div>
  )
}

export default Items