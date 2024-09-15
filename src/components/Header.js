import React, { useState } from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');
  return (
    <header className='h-16 shadow-md bg-white'>
        <div className='h-full container mx-auto flex items-center px-4 justify-between'>
            <div className=''>
                <Link to="/">
                    <Logo w={90} h={50} />
                </Link>
            </div>

            <div className='hidden lg:flex items-center'>
                <div className='relative group'>
                    <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className='border border-gray-300 rounded-l-full px-4 py-2 h-8 transition-all duration-300 ease-in-out focus:outline-none focus-within:border-blue-500 focus:shadow-md group-hover:shadow-md'
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                    />
                    <span 
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none transition-all duration-300 ease-in-out ${
                            isSearchFocused && searchValue === '' ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        Search
                    </span>
                </div>
                <div className='bg-blue-500 hover:bg-blue-700 text-white rounded-r-full px-2 py-2 h-8'>
                    <FaSearch />
                </div>
            </div>
            
            <div className='flex items-center gap-5'>
                <div className='text-2xl relative cursor-pointer text-black hover:text-blue-500 transition-all duration-300 ease-in-out'>
                    <span><FaShoppingCart /></span>
                    <div>
                        <p className='text-xs bg-yellow-500 text-white w-5 p-1 flex items-center justify-center rounded-full px-2 py-0.5 absolute -top-2 -right-3'>0</p>
                    </div>
                </div>
                
                <div className='text-3xl cursor-pointer text-black hover:text-blue-500 transition-all duration-300 ease-in-out'>
                    <FaRegUserCircle />
                </div>

                <Link to="/login" className='bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-full'>Login</Link>
            </div>
        </div>
    </header>  
  )
}

export default Header