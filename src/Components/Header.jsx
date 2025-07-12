import React, { useState } from 'react'
import {Bars3Icon} from '@heroicons/react/24/solid'
const Header = () => {
    const [toggleMenu , setToggleMenu] = useState(false);
  return (
    <header className='flex justify-between px-5   py-2 bg-gray-700'>
        <a href="#" className='font-bold text-2xl'>Karthikeyan</a>
        <nav className='hidden md:block'>
        <ul className='flex text-white'>
            <li><a href="/" className='px-3'>Home</a></li>
            <li><a href="#about" className='px-3'>About</a></li>
            <li><a href="#project" className='px-3'>Projects</a></li>
            <li><a href="#resume" className='px-3'>Resume</a></li>
            <li><a href="#contact" className='px-3'>Contacts</a></li>
        </ul>
        </nav>
    { toggleMenu &&  <nav className='block md:hidden fixed top-10 left-0 bg-gray-550 w-full h-1/4'>
        <ul onClick={()=>{setToggleMenu(!toggleMenu)}} className='flex flex-col text-white'>
            <li className='w-full h-full text-center border-b-2 p-2'><a href="/" >Home</a></li>
            <li className='w-full h-full text-center border-b-2 p-2'><a href="#about" >About</a></li>
            <li className='w-full h-full text-center border-b-2 p-2'><a href="#project" >Projects</a></li>
            <li className='w-full h-full text-center border-b-2 p-2'><a href="#resume" >Resume</a></li>
            <li className='w-full h-full text-center border-b-2 p-2'><a href="#contact" >Contacts</a></li>
        </ul>
        </nav>}
        <button onClick={()=>{setToggleMenu(!toggleMenu)}}className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>

    </header>
  )
}

export default Header