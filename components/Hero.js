import React from 'react';

const Hero = () => {
  return (
    <div className='relative mx-auto max-w-screen-2xl'>
      <div className='absolute z-10 flex w-full items-end justify-center pt-3'>
        <span className='p-2 text-4xl font-black text-white outline'>
          Amiibo Hub
        </span>
      </div>
      <div className='relative'>
        <div className='absolute h-full w-full bg-black opacity-30' />
        <img src='/images/amiibo-hero.webp' alt='hero' />
      </div>
    </div>
  );
};

export default Hero;
