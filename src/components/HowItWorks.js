import React from 'react'
import step1 from '../assets/steps/step_1.jpg'
import step2 from '../assets/steps/step_2.jpg'
import step3 from '../assets/steps/step_3.jpg'
import grid_box from '../assets/blue_grid.png'

const HowItWorks = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className='font-bold text-4xl text-center mt-12'>
            How Lab Special Works
        </div>
        <hr className='py-0.5 w-64 mb-4 mt-2 bg-black'/>
        <div className='flex gap-8'>
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='text-lg bg-yellow-400 text-white w-10 h-10 p-1 flex items-center justify-center rounded-full'>1</div>
                <div className='font-bold py-4'>Order</div>
                <img className='w-[300px] h-[220px] overflow-hidden' src={step1} alt=''/>
            </div>
        
            <div className='flex flex-col items-center'>
                <div className='text-lg bg-yellow-400 text-white w-10 h-10 p-1 flex items-center justify-center rounded-full'>2</div>
                <div className='font-bold py-4'>Check Your Mail</div>
                <img className='w-[300px] h-[220px] overflow-hidden' src={step2} alt=''/>
            </div>

            <div className='flex flex-col items-center justify-center h-full'>
                <div className='text-lg bg-yellow-400 text-white w-10 h-10 p-1 flex items-center justify-center rounded-full'>3</div>
                <div className='font-bold py-4'>Study</div>
                <img className='w-[300px] h-[220px] overflow-hidden' src={step3} alt=''/>
            </div>
        </div>
    </div>
    
  )
}

export default HowItWorks