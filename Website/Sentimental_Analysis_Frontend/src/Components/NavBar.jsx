import React, { useState } from 'react';
import { IoHome, IoMail } from "react-icons/io5";
import { RiContactsFill, RiLoginBoxFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#7E33E0] text-white shadow-md">
      <div className="flex justify-between items-center px-4 h-[56px]">
        
       // Logo section of sentiment analysis
        <div className="flex items-center gap-2">
          <img src="/emotion_img.png" alt="Logo" className="h-8 w-auto" />
          <span className="text-lg font-semibold ">Sentimental Analyzer</span>
        </div>

        {/* Desktop Nav Menu for full screen or tablet */}
        <div className="hidden md:flex flex-grow justify-end">
          <ul className="flex flex-grow justify-around max-w-2xl w-full text-sm sm:text-base">
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
            // login section of the page
            <li>
              <Link to="/login" className="flex items-center gap-2 hover:underline">
                <RiLoginBoxFill /> Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon (Mobile) for small screen */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm sm:text-base bg-[#7E33E0]">
          <li>
            <Link to="/" className="flex items-center gap-2 hover:underline" onClick={() => setIsOpen(false)}>
              <IoHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center gap-2 hover:underline" onClick={() => setIsOpen(false)}>
              <RiContactsFill /> About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center gap-2 hover:underline" onClick={() => setIsOpen(false)}>
              <IoMail /> Contact Us
            </Link>
          </li>
          <li>
            <Link to="/login" className="flex items-center gap-2 hover:underline" onClick={() => setIsOpen(false)}>
              <RiLoginBoxFill /> Login
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavBar;