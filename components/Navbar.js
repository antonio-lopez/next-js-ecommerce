import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex h-14 items-center justify-between bg-darkBeige px-5'>
      <span className='font-serif text-xl font-semibold text-heavyGreen'>
        Amiibo Hub
      </span>
      {/* menu icon */}
      <svg
        className=' text-mossGreen'
        fill='currentColor'
        width='32'
        height='18'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g fillRule='evenodd'>
          <path d='M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z' />
        </g>
      </svg>
    </nav>
  );
};

export default Navbar;
