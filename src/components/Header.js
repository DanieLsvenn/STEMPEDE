import React, { useState } from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    const [menu,setMenu] = useState("home");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isProduct1DropdownOpen, setIsProduct1DropdownOpen] = useState(false);
    const [isProduct2DropdownOpen, setIsProduct2DropdownOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');
  return (
        <div className=' bg-slate-800 text-white py-3 w-full z-20'>

        <div className='container mx-auto flex items-center px-4 justify-between'>
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
                <div className='bg-blue-500 hover:bg-blue-700 text-white rounded-r-full px-2 py-2 h-8 cursor-pointer'>
                    <FaSearch />
                </div>
            </div>
            
            <div className='flex items-center gap-5'>
                <div className='text-2xl relative cursor-pointer text-white hover:text-blue-500 transition-all duration-300 ease-in-out'>
                    <Link to="/cart"><FaShoppingCart /></Link>
                    <div>
                        <p className='text-xs bg-yellow-500 text-white w-5 p-1 flex items-center justify-center rounded-full px-2 py-0.5 absolute -top-2 -right-3'>0</p>
                    </div>
                </div>
                
                <div className='text-3xl cursor-pointer text-white hover:text-blue-500 transition-all duration-300 ease-in-out'>
                    <FaRegUserCircle />
                </div>

                <Link to="/login" className='bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-full'>Login</Link>
            </div>
        </div>

        
        <div className='container mx-auto flex items-center px-4 justify-between'>
                    {/* <MdOutlineArrowDropDownCircle className='w-8 h-8' /> */}
            <ul className='flex flex-grow justify-between items-center py-4'>
                <li className='flex-1'><Link to="/" className='hover:bg-slate-700 px-4 py-2 flex items-center justify-center transition-colors duration-300 rounded-lg mx-1 font-bold'>Home</Link></li>
                {/* <li className='flex-1'><Link to="/" className='hover:bg-slate-700 px-4 py-2 flex items-center justify-center transition-colors duration-300 rounded-lg mx-1 font-bold'>Products</Link></li> */}
                <li className='flex-1 relative'>
                    <div onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} className='cursor-pointer hover:bg-slate-700 px-4 py-2 flex items-center justify-center transition-colors duration-300 rounded-lg mx-1 font-bold'>
                        Products
                    </div>
                    {isDropdownOpen && (
                        <ul className='absolute bg-slate-600 text-white shadow-lg rounded-lg w-full mt-0 z-10'
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                        >


                            <div className='px-4 py-2'>Filter</div>
                            <li className='relative'>
                                <div 
                                    onMouseEnter={() => setIsProduct1DropdownOpen(!isProduct1DropdownOpen)} 
                                    onMouseLeave={() => setIsProduct1DropdownOpen(false)}
                                    className='hover:bg-slate-200 hover:text-black px-4 py-2 flex items-center justify-between'>
                                    By Age
                                </div>
                                {isProduct1DropdownOpen && (
                                    <ul className='absolute left-full top-0 bg-slate-500 text-white shadow-lg rounded-lg w-full mt-0 z-10'
                                        onMouseEnter={() => setIsProduct1DropdownOpen(true)}
                                        onMouseLeave={() => setIsProduct1DropdownOpen(false)}
                                    >
                                        <li className='px-4 py-2 hover:bg-slate-200 hover:text-black rounded-lg'><Link to="/">Detail 1</Link></li>
                                        <li className='px-4 py-2 hover:bg-slate-200 hover:text-black rounded-lg'><Link to="/">Detail 2</Link></li>
                                    </ul>
                                )}
                            </li>



                            <li className='relative'>
                                <div 
                                    onMouseEnter={() => setIsProduct2DropdownOpen(!isProduct2DropdownOpen)} 
                                    onMouseLeave={() => setIsProduct2DropdownOpen(false)}
                                    className='hover:bg-slate-200 hover:text-black px-4 py-2 flex items-center justify-between'>
                                    By Brand
                                </div>
                                {isProduct2DropdownOpen && (
                                    <ul className='absolute left-full top-0 bg-slate-500 text-white shadow-lg rounded-lg w-full mt-0 z-10'>
                                        <li className='px-4 py-2 hover:bg-slate-200 hover:text-black rounded-lg'><Link to="/">Detail 1</Link></li>
                                        <li className='px-4 py-2 hover:bg-slate-200 hover:text-black rounded-lg'><Link to="/">Detail 2</Link></li>
                                    </ul>
                                )}
                            </li>

                            <li className='relative'>
                                <div className='hover:bg-slate-200 hover:text-black px-4 py-2 flex items-center justify-between'>
                                    Lab Specials
                                </div>
                            </li>
                        </ul>
                    )}
                </li>
                <li className='flex-1'><div to="/home" className='hover:bg-slate-700 px-4 py-2 flex items-center justify-center transition-colors duration-300 rounded-lg mx-1 font-bold'>Trending</div></li>                        
                <li className='flex-1'><Link to="/home" className='hover:bg-slate-700 px-4 py-2 flex items-center justify-center transition-colors duration-300 rounded-lg mx-1 font-bold'>Documentation</Link></li>
            </ul>
        </div>
        </div> 
  )
}

export default Header