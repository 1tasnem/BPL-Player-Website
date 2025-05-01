import React from 'react';
import './Footer.css'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <div className="relative bg-[#0f0f23] text-white pt-32 pb-10">
      {/* Floating Newsletter */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-4xl px-6">
        <div className="bg-gradient-to-r from-blue-100 via-white to-orange-100 shadow-xl rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-2 text-black">Subscribe to our Newsletter</h2>
          <p className="text-center text-gray-600 mb-4">Get the latest updates and news right in your inbox!</p>
          <div className="flex justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded border border-gray-300 w-64 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white px-4 py-2 rounded font-semibold">
              Subscribe
            </button>
          </div>

        </div>
        
      </div>
      <div className='flex justify-center'>
                        <img className='h-16 mx-auto bg-white rounded-lg'src={logo} alt=""/>
                    </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-5 px-6">

       
        <div>
          <h3 className="font-semibold text-lg mb-2">About Us</h3>
          <p className="text-gray-400 text-sm">We are a passionate team dedicated to providing the best services to our customers.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-2">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded w-full text-black focus:outline-none"
            />
            <button className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white px-4 py-2 rounded font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="text-center mt-10 border-t-2 ">
        
        <p className="text-gray-500 text-sm mt-2">© 2025 Cricket. All rights reserved.</p>
      </div>
    </div>
  </div>
  

);
}
   

export default Footer;