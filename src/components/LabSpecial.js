import React from 'react'
import labSpecial from '../assets/lab_special.jpg'

const LabSpecial = () => {
  return (
    <div className='items-center flex flex-col'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Lab Special</h1>
        <hr className='py-0.5 w-64 mb-4 mt-2 bg-black' />
      </div>

      <div className='grid grid-col'>
        <div className="m-6 flex flex-col md:flex-row justify-center items-center">
          {/* Image container */}
          <div className="w-full md:w-2/3 mb-4 md:mb-0 flex justify-center">
            <img
              src={labSpecial}
              alt="Lab Special"
              className="border-8 border-slate-800 h-auto w-auto"
            />
          </div>

          {/* Text container */}
          <div className="w-full md:w-2/3 flex justify-center items-center">
            <div className='border rounded-md overflow-y-auto max-h-96 px-20 no-scrollbar'>
              <p className='font-medium italic text-xl md:text-6xl'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LabSpecial