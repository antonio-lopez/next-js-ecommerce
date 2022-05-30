import Link from 'next/link';
import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { gameSeries, amiiboSeries, amiibo } from '../data';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=' bg-darkBeige '>
      <div className='mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-5 '>
        <Link href='/'>
          <a className='font-serif text-xl font-semibold text-heavyGreen hover:text-darkGreen'>
            Amiibo Hub
          </a>
        </Link>
        {/* mobile menu icon */}
        <img
          onClick={() => setIsOpen((open) => !open)}
          className={`${isOpen ? 'hidden' : 'block'}`}
          src='/images/icon-menu.svg'
          alt='icon menu'
        />
        {/* mobile menu */}
        <div
          onClick={() => setIsOpen((open) => !open)}
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute right-0 top-0 z-20 min-h-screen  bg-lightBeige px-4 pt-5`}
        >
          <div className='flex justify-end pb-8'>
            <img src='/images/icon-close-menu.svg' alt='close menu' />
          </div>
          <ul className='space-y-6 text-heavyGreen'>
            <li>
              <Link href={`/amiibo/amiibos`}>
                <a>Browse By Character</a>
              </Link>
            </li>
            <li>
              <Link href={`/amiibo/gameseries`}>
                <a>Browse By Game Series</a>
              </Link>
            </li>
            <li>
              <Link href={`/amiibo/amiiboseries`}>
                <a>Browse By Amiibo Series</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* desktop menu */}
        <ul className='hidden items-center space-x-10 text-heavyGreen lg:flex'>
          <li className='group flex items-center'>
            Browse All <FaCaretDown className=' h-8 w-8 fill-pumpkinOrange' />
            {/* character list */}
            <ul className='absolute top-10 z-50 hidden h-60 overflow-y-scroll rounded-md bg-lightBeige/80 pt-2 pl-2 group-hover:block'>
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
            <ul className='absolute top-10 z-50 hidden h-60 overflow-y-scroll rounded-md bg-lightBeige/80 pt-2 pl-2 group-hover:block'>
              {gameSeries.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/amiibo/gameseries/${encodeURIComponent(item.name)}`}
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
            <ul className='absolute top-10 z-50 hidden h-32 rounded-md bg-lightBeige/80 pt-2 pl-2 group-hover:block'>
              {amiiboSeries.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/amiibo/amiiboseries/${encodeURIComponent(
                      item.name
                    )}`}
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
