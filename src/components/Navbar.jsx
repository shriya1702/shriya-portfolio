import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full text-white z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold">Shriya Kapil</div>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
            <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
            <Link to="experience" smooth={true} duration={500} className="cursor-pointer">Experience</Link>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="about" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>About</Link>
            <Link to="skills" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Skills</Link>
            <Link to="experience" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Experience</Link>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Projects</Link>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
