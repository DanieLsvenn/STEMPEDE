import React from 'react'
import introduction from '../assets/introduction.png'
import quotation from '../assets/quotation.png'

const Introduction = () => {
  return (
    // <div className='bg-gradient-to-b from-blue-500 to-yellow-400 flex'>
    <div className='bg-blue-500 flex'>
        
        <div className='flex flex-col justify-center relative'>
            <img className='absolute top-0 left-0 w-12 h-12 ml-2 mt-1' src={quotation} alt=''/>
            <h1 className='text-3xl text-white font-semibold px-10 pt-8'>Thinking like an engineer means you're resilient. It's getting back up after being knocked down and approaching things differently. That determination helps kids tackle everyday challenges and it's the same determination that puts rovers on other dang planets!</h1>
            <div className='px-10'>
                <button className='w-28 h-10 rounded-full bg-yellow-400 border-none text-white font-medium mt-8 cursor-pointer'>Check Now</button>
            </div>
            
        </div>
        <div className='flex items-end justify-end'>
            <img src={introduction} alt='' />
        </div>
    </div>
  )
}

export default Introduction