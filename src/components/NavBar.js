import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const NavBar = () => {
  return (
    <div className='flex items-center bg-slate-800 text-white'>
        <MdOutlineArrowDropDownCircle className='w-8 h-8 mr-4 text-white' />
        <ul className='flex flex-grow justify-between px-4 py-2'>
                <li >Home</li>
                <li >Products</li>
                <li >Trending</li>
                <li >Documentation</li>
        </ul>
    </div>
  )
}

export default NavBar