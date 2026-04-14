import React from 'react';
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-base-content rounded p-10">
  <div>
    <h1 className='font-bold text-5xl text-white '>KeenKeeper</h1>
    <p className='text-gray-300 text-xl'><small>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</small></p>
    <p className='text-gray-50 text-xl'><small>Social Links</small></p>
  </div>
  <nav>
    <div className="grid grid-flow-col gap-4 ">
     <a href="/instragram" className='border-2 p-2 rounded-4xl bg-white '>
     <RiInstagramFill className='text-xl' />
     </a>
     <a href="/instragram" className='border-2 p-2 rounded-4xl bg-white '>
     <FaFacebookSquare className='text-xl' />
     </a>
     <a href="/instragram" className='border-2 p-2 rounded-4xl bg-white '>
     <FaXTwitter className='text-xl' />
     </a>
    </div>
  </nav>
  <aside  className='flex justify-between gap-90'>
   <div>
   <p className='text-gray-300 '><small>
    Copyright © {new Date().getFullYear()} KeenKeeper. - All right reserved
      </small> </p>
   </div>
   <div className='flex gap-10'>
    <p className='text-gray-300 '>Privacy Policy</p>
    <p className='text-gray-300 '>Terms of Service </p>
    <p className='text-gray-300 '>Cookies</p>
   </div>
  </aside>
</footer>
        </div>
    );
};

export default Footer;