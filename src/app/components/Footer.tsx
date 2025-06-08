import React from 'react'
import { ArrowRight } from 'lucide-react'
const Footer = () => {
  return (
    <section className='min-h-screen w-full bg-black py-20 max-sm:px-4 px-10 flex justify-center text-white fixed top-0 left-0 font-clashgrotesk'>
        <div className='w-full max-w-7xl h-full'>
            <div className='flex max-md:flex-col justify-between max-md:gap-4'>
                <div className='flex flex-col max-md:gap-4 gap-10'>
                    <div className='flex flex-col'>
                    <h1 className='text-6xl max-sm:text-4xl max-md:text-5xl font-semibold'>Why stop here?</h1>
                    <h1 className='text-6xl max-sm:text-4xl max-md:text-5xl font-semibold'>let&apos;s go further!</h1>
                    </div>
                    <div>
                        <h1 className='flex items-center gap-4'>Lets talk<span className='inline-block'><ArrowRight/></span></h1>
                    </div>
                </div>
                <div className='flex flex-col max-md:gap-4 gap-10'>
                        <div>
                            <ul className='flex max-sm:text-sm space-x-4'>
                                <li>home</li>
                                <li>services</li>
                                <li>cases</li>
                                <li>blog</li>
                                <li>contact</li>
                            </ul>
                        </div>
                        <div className='text-right max-md:text-left flex flex-col gap-4'>
                            <h1 className='text-neutral-500'>say hi!</h1>
                            <h2 className='lowercase'>pandapratyush005@gmail.com</h2>
                            <h3 className='text-neutral-500'>where to find me</h3>
                            <h4>NIT rourkela,India</h4>
                           
                            <div className='flex gap-4 justify-end max-md:justify-start'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram text-neutral-500"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin text-neutral-500"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-icon lucide-message-circle text-neutral-500"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                            </div>
                            <div className='flex text-xs gap-4 justify-end max-md:justify-start text-neutral-500'>
                                <h1>Privacy Policy</h1>
                                <h1>Terms and Conditions</h1>
                                <h1>Cookies</h1>
                            </div>
                            <h1 className='text-xs  text-neutral-500'>&copy; 2025- PP Studio</h1>
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer