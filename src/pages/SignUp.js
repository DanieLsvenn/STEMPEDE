import React, { useState } from 'react'
import loginIcon from '../assets/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [data,setData] = useState({
        email : "",
        password : "",
        confirmPassword: ""
    })

    const handleOnChange = (e) =>{
        const { name , value } = e.target

        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }
    return (
        <section id='login'>
            <div className='mx-auto container px-4 py-5'>
                <div className='bg-white p-4 w-[700px] mx-auto'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcon} alt="login icon" />     
                    </div>
                </div>
                

                <div className='bg-white p-4 w-[700px] mx-auto flex'>        
                    {/* First Column */}
                    <div className='w-1/2 pr-4'>
                        <form className='pt-6 flex flex-col gap-2'>
                            <div className='grid'>
                                <label>Username : </label>
                                <div className='bg-slate-100 p-2'>
                                    <input 
                                    className='w-full h-full outline-none bg-transparent'
                                    name='username' 
                                    type='text' 
                                    placeholder='Enter Username'/>
                                </div>
                            </div>

                            <div className='grid'>
                                <label>Phone : </label>
                                <div className='bg-slate-100 p-2'>
                                    <input 
                                    className='w-full h-full outline-none bg-transparent'
                                    name='username' 
                                    type='text' 
                                    placeholder='Enter Phone number'/>
                                </div>
                            </div>

                            <div className='grid'>
                                <label>Address : </label>
                                <div className='bg-slate-100 p-2'>
                                    <input 
                                    className='w-full h-full outline-none bg-transparent'
                                    name='address' 
                                    type='text' 
                                    placeholder='Enter Your Address'/>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Second Column */}
                    <div className='w-1/2 pl-4'>

                    
                    
    
                    <form className='pt-6 flex flex-col gap-2'>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input 
                                className='w-full h-full outline-none bg-transparent'
                                name='email'
                                value={data.email}
                                onChange={handleOnChange} 
                                type='email' 
                                placeholder='Enter email credentials'/>
                            </div>
                        </div>
    
                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input 
                                className='w-full h-full outline-none bg-transparent' 
                                name='password'
                                value={data.password}
                                onChange={handleOnChange} 
                                type={showPassword ? "text" : "password"} 
                                placeholder='Enter password'
                                />
    
                                <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((prev)=>!prev)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label>Confirm Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input 
                                className='w-full h-full outline-none bg-transparent'
                                name='confirmPassword'
                                value={data.confirmPassword}
                                onChange={handleOnChange} 
                                type={showConfirmPassword ? "text" : "password"} 
                                placeholder='Confirm password'
                                />
                                <div className='cursor-pointer text-xl' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                    <span>
                                        {showConfirmPassword ? <FaEyeSlash/> : <FaEye/>}
                                    </span>
                                </div>
                            </div>
                        </div>
    
                        
                    </form>
                    
                    
                    <p className='my-5'>Already have an Account? <Link className='text-blue-500 hover:underline hover:text-blue-700' to={"/login"}>Login</Link></p> 

                    </div>
                </div>
                <div className='bg-white p-4 w-[700px] mx-auto'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 w-full max-w-[160px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Create Account</button>
                </div>
            </div>
        </section>
    )
}

export default SignUp