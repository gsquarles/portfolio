import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <>
      <header className=' flex p-6 lg:p-6 relative items-center border-b shadow-sm '>
        <div className='mr-10'>
          <Link
            to='/'
            className=' font-sans text-xl lg:text-3xl  hover:scale-105 w-1/2 cursor-pointer'
          >
            <span className='text-primary'> 𝒢𝓇𝒾𝒻𝒻𝒾𝓃 </span> <span>𝒬𝓊𝒶𝓇𝓁𝑒𝓈</span>
          </Link>
        </div>
        <nav className='w-1/2 justify-end items-center flex ml-auto mr-3 md:mr-14 lg:mr-20'>
          <div className='md:flex hidden'>
            <ul className='md:flex md:items-center md:space-x-4 lg:space-x-6'>
              <li className='p-1 md:p-2 hover:underline'>
                <Link
                  to='/'
                  className='text-lg md:text-xl lg:text-2xl  text-primary  '
                >
                  Home
                </Link>
              </li>

              <li className='p-1 md:p-2 hover:underline'>
                <Link
                  to='/about'
                  className='text-lg md:text-xl lg:text-2xl text-primary'
                >
                  About
                </Link>
              </li>
              <li className='p-1 md:p-2 hover:underline'>
                <Link
                  to='/projects'
                  className='text-lg md:text-xl text-primary lg:text-2xl'
                >
                  Projects
                </Link>
              </li>
              <li className='p-1 md:p-2 hover:underline'>
                <a
                  href='../../resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-lg md:text-xl text-primary lg:text-2xl'
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div className='md:hidden flex flex-col'>
            <button
              className='bg-slate-300 rounded-full w-10 h-10 block'
              onClick={toggleMenu}
            >
              <FaBars className='w-10 h-7' />
            </button>
            <ul
              className={`${
                isOpen ? "block bg-primary" : "hidden"
              } md:hidden absolute w-[22.5%] p-2 top-full z-10 left-3/4 rounded-lg`}
            >
              <li className='p-1'>
                <Link to='/' className='text-lg text-white' onClick={closeMenu}>
                  Home
                </Link>
              </li>

              <li className='p-1'>
                <Link
                  to='/about'
                  className='text-lg text-white'
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className='p-1'>
                <Link
                  to='/projects'
                  className='text-lg text-white'
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
              <li className='p-1'>
                <a
                  href='../../resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-lg text-white'
                  onClick={closeMenu}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
