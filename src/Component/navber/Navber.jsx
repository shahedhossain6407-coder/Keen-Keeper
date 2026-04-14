import React from 'react';
import { IoMdHome } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-10">
  <div className="flex-1">
    <a className="  text-xl"><span className='font-bold'>Keen</span>Keeper</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal ">
      <li className='border border-gray-500 bg-[#244D3F] text-white '><a><IoMdHome/>Home</a></li>
      <li><a><RiTimeLine/>Timeline</a></li>
      <li><a><TfiStatsUp/>Stats</a></li>     
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navber;