import Link from 'next/link';
import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className=' bg-darkBeige '>
      <div className='mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-5 '>
        <Link href='/'>
          <a className='font-serif text-xl font-semibold text-heavyGreen hover:text-darkGreen'>
            Amiibo Hub
          </a>
        </Link>
        {/* mobile menu icon */}
        <svg
          className=' text-mossGreen lg:hidden'
          fill='currentColor'
          width='32'
          height='18'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g fillRule='evenodd'>
            <path d='M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z' />
          </g>
        </svg>
        {/* mobile menu */}
        {/* desktop menu */}
        <ul className='flex items-center space-x-10 text-heavyGreen'>
          <li className='flex items-center'>
            Browse All <FaCaretDown className=' h-8 w-8 fill-pumpkinOrange' />
          </li>
          <li className='flex items-center'>
            Series <FaCaretDown className=' h-8 w-8 fill-pumpkinOrange' />
          </li>
          <li className='flex items-center'>
            Franchise <FaCaretDown className=' h-8 w-8 fill-pumpkinOrange' />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
