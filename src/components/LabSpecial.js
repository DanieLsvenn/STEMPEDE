import React from 'react'
import labSpecial from '../assets/lab_special.jpg'

const LabSpecial = () => {
  return (
    <div className='items-center flex flex-col'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Lab Special</h1>
        <hr className='py-0.5 w-64 mb-4 mt-2 bg-black'/>
      </div>

      <div className="flex justify-between items-center">
        <div className="w-1/2 relative">
          <img src={labSpecial} alt="Lab Special" className="border-4 border-slate-800"/>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
            <p className="text-white text-lg">Hovered Text</p>
          </div>
        </div>

        <div className="w-1/2 px-10 flex justify-center items-center">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?</p>
        </div>
      </div>
    </div>
  )
}

export default LabSpecial