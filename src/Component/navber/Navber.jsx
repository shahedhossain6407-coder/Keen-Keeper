import React from 'react';
import { IoMdHome } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from 'react-router';
const Navber = () => {

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-10">
  <div className="flex-1">
    <a className="  text-xl"><span className='font-bold'>Keen</span>Keeper</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal ">
      <li ><NavLink to="/" className={({isActive})=>isActive ? `border border-gray-500 bg-[#244D3F] text-white ` : ``}><IoMdHome/>Home</NavLink></li>
      <li ><NavLink to="/timeLine" className={({isActive})=>isActive ? `border border-gray-500 bg-[#244D3F] text-white ` : ``}><RiTimeLine/>Timeline</NavLink></li>
      <li><NavLink to="/stats" className={({isActive})=>isActive ? `border border-gray-500 bg-[#244D3F] text-white ` : ``}><TfiStatsUp/>Stats</NavLink></li>     
    </ul>
  </div>
</div> 
        </div>
    );
};

export default Navber;