import React from 'react'
import seller1 from '../assets/bestseller/seller_1.jpg'

const BestSeller = () => {
  return (
    <div className='py-12'>
      <div className='text-left'>
        <h1 className='text-4xl font-bold mb-14'>Best Seller</h1>
      </div>

      <div className="flex justify-between items-center border-slate-800">
        <div className="relative">
          <img src={seller1} alt="Lab Special" className="w-[200px] px-2"/>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
            <p className="text-white text-lg">Hovered Text</p>
          </div>
            
        </div>

        <div className="relative">
          <img src={seller1} alt="Lab Special" className="w-[200px] px-2"/>
          
            
        </div>

        <div className="relative">
          <img src={seller1} alt="Lab Special" className="w-[200px] px-2"/>
          
            
        </div>

        <div className="relative">
          <img src={seller1} alt="Lab Special" className="w-[200px] border-slate-800 px-2"/>
          
            
        </div>

        <div className="relative">
          <img src={seller1} alt="Lab Special" className="w-[200px] border-slate-800 px-2"/>
          
            
        </div>
      </div>
    </div>
  )
}

export default BestSeller