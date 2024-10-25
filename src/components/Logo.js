import React from 'react'
import lg_logo from "../assets/STEMPEDE_logo_white.png";
import sm_logo from "../assets/STEMPEDE_logo_white_reduced.png";

const Logo = () => {
  return (
        <div>
        {/* Informal logo for larger screens */}
        <img 
        src={lg_logo} 
        alt="Informal Logo" 
        className="hidden md:block w-96" // Hidden on small screens, shown on medium and up
        />

        {/* Formal logo for smaller screens */}
        <img 
        src={sm_logo} 
        alt="Formal Logo" 
        className="block md:hidden w-48" // Shown on small screens, hidden on medium and up
        />
        </div>
    )
}

export default Logo
