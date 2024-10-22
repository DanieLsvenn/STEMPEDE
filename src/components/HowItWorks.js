import React from 'react'
import step1 from '../assets/steps/step_1.jpg'
import step2 from '../assets/steps/step_2.jpg'
import step3 from '../assets/steps/step_3.jpg'
import grid_box from '../assets/blue_grid.png'
import '../components/css/HowItWorks.css'

const HowItWorks = () => {
  return (
    <div className='how-it-works flex flex-col items-center justify-center'>
        <div className='font-bold text-4xl text-center mt-10'>
            How Lab Special Works
        </div>
        <hr className='py-0.5 w-64 mb-4 mt-2 bg-black'/>
        <div className='mt-10 justify-center gap-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='text-lg bg-yellow-400 text-white w-10 h-10 p-1 flex items-center justify-center rounded-full font-bold'>1</div>
                <div className='font-bold py-4'>Order</div>
                <img className='w-auto h-80 object-hidden overflow-hidden' src={step1} alt=''/>
            </div>
        
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='text-lg bg-yellow-400 text-white w-10 h-10 p-1 flex items-center justify-center rounded-full font-bold'>2</div>
                <div className='font-bold py-4'>Check Your Mail</div>
                <img className='w-auto h-80 object-hidden overflow-hidden' src={step2} alt=''/>
            </div>

            <div className='flex flex-col items-center justify-center h-full'>
                <div className='text-lg bg-yellow-400 text-white w-10 h-10 p-1 flex items-center justify-center rounded-full font-bold'>3</div>
                <div className='font-bold py-4'>Study</div>
                <img className='w-auto h-80 object-hidden overflow-hidden' src={step3} alt=''/>
            </div>
        </div>
    </div>

    
    
  )
}

export default HowItWorks