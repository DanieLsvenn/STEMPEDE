import React from 'react'
import review1 from '../assets/reviews/review_1.jpg'

const Reviews = () => {
  return (
    <div className='py-12'>
        <div className="flex justify-center">

            <div className='p-20 items-start'>
                <div className="relative">
                    <div className='text-5xl font-semibold'>Don't take our word for it!</div>
                </div>

                <div className='flex items-center'>
                    <div className="text-6xl font-bold mr-2">5</div>
                    <div className="flex flex-col justify-center">
                        <div className="flex">
                            <span className="text-2xl">⭐</span>
                            <span className="text-2xl">⭐</span>
                            <span className="text-2xl">⭐</span>
                            <span className="text-2xl">⭐</span>
                            <span className="text-2xl">⭐</span>
                        </div>
                        <div className="text-lg">
                            Based on 791 reviews
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='w-full flex flex-wrap justify-center'>

                <div className="flex flex-col items-center border-4 border-slate-800 m-2 w-1/3">
                    <img src={review1} alt="" className="mb-2" />
                    <p className="text-lg font-semibold">John Doe</p>
                    <div className="flex mb-2">
                        {/* Star rating */}
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                    </div>
                    <p className="p-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                </div>

                <div className="flex flex-col items-center border-4 border-slate-800 m-2 w-1/3">
                        <img src={review1} alt="" className=" mb-2" />
                        <p className="text-lg font-semibold">Jane Smith</p>
                        <div className="flex mb-2">
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                        </div>
                        <p className="p-4">"Sed ut perspiciatis unde omnis iste."</p>
                </div>

                <div className="flex flex-col items-center border-4 border-slate-800 m-2 w-1/3">
                        <img src={review1} alt="" className=" mb-2" />
                        <p className="text-lg font-semibold">Jane Smith</p>
                        <div className="flex mb-2">
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                        </div>
                        <p className="p-4">"Error sit voluptatem accusantium doloremque laudantium."</p>
                </div>

                <div className="flex flex-col items-center border-4 border-slate-800 m-2 w-1/3">
                        <img src={review1} alt="" className=" mb-2" />
                        <p className="text-lg font-semibold">Jane Smith</p>
                        <div className="flex mb-2">
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                        </div>
                        <p className="p-4">"Sit voluptatem accusantium doloremque laudantium."</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews