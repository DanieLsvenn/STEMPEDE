import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    // const [data,setData] = useState({
    //     email : "",
    // })

    // const handleOnChange = (e) =>{
    //     const { name , value } = e.target

    //     setData((preve)=>{
    //         return{
    //             ...preve,
    //             [name] : value
    //         }
    //     })
    // }
  return (
    <div className='bg-blue-500 text-white py-12 flex'>
        <div className='w-2/5 pl-4'>
        <div className='footer-section'>
    <p>Join our community to receive the latest news about our inventive lab choice</p>
    <div className='flex items-center mt-4'>
        <div className='bg-slate-100 p-2 flex-grow'>
            <input 
            className='w-full h-full outline-none bg-transparent'
            name='email'
            // value={data.email}
            // onChange={handleOnChange} 
            type='email' 
            placeholder='Enter email credentials'/>
        </div>
        <button className='bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-r-full hover:scale-105 transition-all ml-2 whitespace-nowrap'>Sign Up</button>
    </div>
</div>
        </div>

        <div className='w-1/5 pl-4'>
            <div className='footer-section'>
                <h3>Contact Us</h3>
                <p>We are a team of developers who are passionate about creating beautiful and functional websites.</p>
                <div className='flex gap-2 gy-2'>
                    <FaFacebook/>
                    <FaXTwitter/>
                </div>
            </div>
        </div>

        <div className='w-1/5 pl-4'>
            <div className='footer-section'>
                <h3>Products</h3>
                <p>We are a team of developers who are passionate about creating beautiful and functional websites.</p>
            </div>
        </div>

        <div className='w-1/5 pl-4'>
            <div className='footer-section'>
                <h3>About Us</h3>
                <p>We are a team of developers who are passionate about creating beautiful and functional websites.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer