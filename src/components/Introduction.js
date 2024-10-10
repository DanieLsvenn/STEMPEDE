import React from 'react'
import introduction from '../assets/introduction.png'
import quotation from '../assets/quotation.png'
import '../components/css/Introduction.css'

const Introduction = () => {
  return (
    // <div className='bg-gradient-to-b from-blue-500 to-yellow-400 flex'>
          <div className='grid grid-col bg-blue-500 pt-10 px-10'>

            <div className="flex flex-col md:flex-row justify-center items-center">

              <img className='w-20 h-20 ml-2 mt-1' src={quotation} alt=''/>
              {/* Text container */}
              <div className="w-full md:w-2/3 flex justify-center items-center">
                <div>
                  <div className='overflow-y-auto max-h-96 px-20 no-scrollbar mb-14'>
                    <p className='font-medium italic lg:text-6xl md:text-3xl sm:text-2xl text-white'>
                    Thinking like an engineer means you're resilient. It's getting back up after being knocked down and approaching things differently. That determination helps kids tackle everyday challenges and it's the same determination that puts rovers on other dang planets!
                    </p>
                  </div>
                    <div className='px-20'>
                        <button className='lg:w-80 lg:h-28 lg:text-4xl md:w-52 md:h-14 md:text-2xl sm:w-36 sm:h-10 sm:text-sm rounded-full bg-yellow-400 border-none text-white font-semibold text-center mb-10 cursor-pointer'>See More</button>
                    </div>

                </div>
              </div>

              {/* Image container */}
              <div className="w-full md:w-1/3 sm:w-0.5 flex justify-center">
                <img
                  src={introduction}
                  alt="Lab Special"
                  className="h-auto w-auto sm:block hidden"
                />
              </div>
            </div>

          </div>
  )
}

export default Introduction