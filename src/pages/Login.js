import React, { useState } from 'react'
import loginIcon from '../assets/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword,setShowPassword] = useState(false)

    const [data,setData] = useState({
        email : "",
        password : ""
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
            <div className='bg-white p-4 w-full max-w-md mx-auto'>
                <div className='w-20 h-20 mx-auto'>
                    <img src={loginIcon} alt="login icon" />     
                </div>

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
                        <Link className='block w-fit ml-auto hover:underline hover:text-blue-700' to={'/forgot-password'}>
                                Forgot password?
                        </Link>
                    </div>

                    <button className='bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
                </form>

                <p className='my-5'>Don't have an Account? <Link className='text-blue-500 hover:underline hover:text-blue-700' to={"/sign-up"}>Sign Up</Link></p>
            </div>
        </div>
    </section>
  )
}

export default Login