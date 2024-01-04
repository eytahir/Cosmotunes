import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import logo from '../Assets/logo.png'

const Navbar = () => {

    const [nav,setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    



  return (
    <div className='flex justify-between items-center h-24 bg-black w-full  px-4 mx-auto text-white'>
        <img className='w-full text-3xl font-bold text-white max-w-[130px] p-6' src={logo} alt="//" />
        <ul className=' md:flex' hidden>
            <li className='p-4 text-medium'>Home</li>
            <li className='p-4 text-medium'>Products</li>
            
            <li className='p-4 text-medium'>About</li>
            <li className='p-4 text-medium'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu/> }
            
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] ease-in-out duration-700 h-full border-r bg-black  ' : ' hidden ' }>
        <h1 className='w-full text-3xl font-bold text-white mb-'>Cosmotunes</h1>
            <ul className=' p-4 uppercase'>
            <li className='p-4 border-b border-gray-400'>Home</li>
            <li className='p-4 border-b border-gray-400'>Company</li>
            <li className='p-4 border-b border-gray-400'>Resources</li>
            <li className='p-4 border-b border-gray-400'>About</li>
            <li className='p-4 border-b border-gray-400'>Contact</li>

            </ul>
        </div>
        
    </div>
  )
}

export default Navbar