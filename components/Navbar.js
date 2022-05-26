import Link from 'next/link';
import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { gameSeries, amiiboSeries, amiibo } from '../data';
const Navbar = () => {
  // const [isHidden, setIsHidden] = useState(true);

  // const showListToggle = () => {
  //   console.log('yo!!');
  //   setIsHidden(!isHidden);
  // };

  // console.log(isHidden);
  // const amiiboMap = amiibo.map((item) => item.slug.current);
  // console.log(amiiboMap);

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
        <ul className='hidden items-center space-x-10 text-heavyGreen lg:flex'>
          <li className='group flex items-center'>
            {/* <li className='flex items-center' onClick={showListToggle}> */}
            Browse All <FaCaretDown className=' h-8 w-8 fill-pumpkinOrange' />
            {/* character list */}
            <ul className='absolute top-10 z-50 hidden group-hover:block'>
              {amiibo.map((item) => (
                <li key={item.slug.current}>
                  <Link href={`/amiibo/${item.slug.current}`}>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className='group flex items-center'>
            Game Series <FaCaretDown className=' h-8 w-8 fill-pumpkinOrange' />
            {/* game series list */}
            <ul className='absolute top-10 z-50 hidden group-hover:block'>
              {gameSeries.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/amiibo/amiiboseries/${item.name.replace(/ /g, '')}`}
                  >
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className='group flex items-center'>
            Amiibo Series{' '}
            <FaCaretDown className=' h-8 w-8 fill-pumpkinOrange' />
            {/* amiibo series list */}
            <ul className='absolute top-10 z-50 hidden group-hover:block'>
              {amiiboSeries.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/amiibo/amiiboseries/${item.name.replace(/ /g, '')}`}
                  >
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
