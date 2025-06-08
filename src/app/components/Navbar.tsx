import React from 'react'
import MiyagamiNav from '../../../public/miyagaminav.svg'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className='fixed w-full max-sm:p-4 p-10 z-10 text-white flex justify-center'>
        <div className='w-full flex items-center gap-8 max-w-7xl'>
        <Image src={MiyagamiNav} alt='' className=''/>
        <div className='bg-[#DBF900] p-5 rounded-4xl'>
            <ul className='flex space-x-2 text-sm text-black'>
                <li>Home</li>
                <li>Services</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar