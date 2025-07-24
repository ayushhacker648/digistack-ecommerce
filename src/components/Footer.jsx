import React from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../assets/Logo.png'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-[#0f2027] text-gray-200 py-10'>
      <div className='max-w-5xl mx-auto px-4 md:flex md:justify-between'>
        {/*  info */}
        <div className='mb-4 md:mb-0'>
            <Link to='/'>
              {/* <img src={Logo} alt="" className='w-32'/> */}
              <h1 className='text-red-500 text-2xl font-bold'>DigiStack</h1>
            </Link>
            <p className='mt-2 text-xs'>Powering Your World with the Best in Electronics.</p>
            <p className='mt-2 text-xs'>123 Electronics St, Style City, NY 10001</p>
            <p className='text-xs'>Email: support@DigiStack.com</p>
            <p className='text-xs'>Phone: (123) 456-7890</p>
        </div>
        {/* customer service link */}
        <div className='mb-4 md:mb-0'>
            <h3 className='text-xl font-semibold'>Customer Service</h3>
            <ul className='mt-2 text-xs space-y-2'>
                <li>Contact Us</li>
                <li>Shipping & Returns</li>
                <li>FAQs</li>
                <li>Order Tracking</li>
                <li>Size Guide</li>
            </ul>
        </div>
        {/* social media links */}
        <div className='mb-4 md:mb-0'>
            <h3 className='text-xl font-semibold'>Follow Us</h3>
            <div className='flex space-x-4 mt-2'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitterSquare/>
                <FaPinterest/>
            </div>
        </div>
        {/* newsletter subscription */}
        <div>
            <h3 className='text-xl font-semibold'>Stay in the Loop</h3>
            <p className='mt-2 text-xs'>Subscribe to get special offers, free giveaways, and more</p>
            <form action="" className='mt-4 flex'>
                <input 
                type="email" 
                placeholder='Your email address'
                className='w-full p-2 rounded-l-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500'
                />
                <button type='submit' className='bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700'>Subscribe</button>
            </form>
        </div>
      </div>
      {/* bottom section */}
      <div className='mt-6 border-t border-gray-700 pt-4 text-center text-xs'>
        <p>&copy; {new Date().getFullYear()} <span className='text-red-500'>DigiStack</span>. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer