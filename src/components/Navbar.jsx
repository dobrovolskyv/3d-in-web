import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {

  return (
    <header className="header">
        <NavLink to="/" className="rounded-lg bg-white flex items-center justify-center w-10 h-10 font-bold shadow-md">
            <p className='blue-gradient_text'>DVO</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={({isActive})=> isActive? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive})=> isActive? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
            <NavLink to="/contact" className={({isActive})=> isActive? 'text-blue-500' : 'text-black'}>
                Contact
            </NavLink>
       
        </nav>
    </header>
  )
}

export default Navbar