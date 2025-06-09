'use client'
import React, { useState } from 'react'
import MiyagamiNav from '../../../public/miyagaminav.svg'
import Image from 'next/image'

const Navbar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    return (
        <nav className='fixed w-full max-sm:p-4 p-10 z-10 text-white flex justify-center font-clashgrotesk'>
            <div className='w-full max-sm:hidden flex items-center gap-8 max-w-7xl'>
                <button 
                    onClick={() => setIsMenuVisible(!isMenuVisible)}
                    className="focus:outline-none"
                >
                    <Image src={MiyagamiNav} alt='Menu toggle' />
                </button>
                {/* Updated transition with proper visibility handling */}
                <div className={`
                    transition-all duration-700 ease-in-out
                    ${isMenuVisible ? 
                        "opacity-100 scale-100 p-5 font-semibold bg-[#ddfa00] rounded-4xl" 
                        : 
                        "opacity-0 scale-50 pointer-events-none"
                    }
                `}>
                    <ul className='flex space-x-2 text-sm text-black'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Case Studies</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            
            {/* Mobile (small screens) - Bottom-centered */}
            <div className='sm:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2'>
                <button 
                    onClick={() => setIsMenuVisible(!isMenuVisible)}
                    className="focus:outline-none"
                >
                    <Image src={MiyagamiNav} alt='Menu toggle' />
                </button>
                {/* Also improved mobile menu transition */}
                <div className={`
                    absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 
                    p-4 bg-[#ddfa00] rounded-4xl w-[160px]
                    transition-all duration-700 ease-in-out
                    ${isMenuVisible ? 
                        "opacity-100 scale-100 translate-y-0" 
                        : 
                        "opacity-0 scale-50 translate-y-2 pointer-events-none"
                    }
                `}>
                    <ul className='flex flex-col items-center space-y-6 text-sm text-black font-semibold'>
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