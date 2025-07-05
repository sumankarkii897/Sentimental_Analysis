import React from 'react';
import { IoHome, IoMail } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="bg-[#7E33E0] h-[56px] text-white shadow-md">
      <ul className="flex justify-around items-center h-full gap-8 px-4 text-sm sm:text-base">
        <li>
          <Link to="/" className="flex items-center gap-2 hover:underline">
            <IoHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="flex items-center gap-2 hover:underline">
            <RiContactsFill /> About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="flex items-center gap-2 hover:underline">
            <IoMail /> Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
