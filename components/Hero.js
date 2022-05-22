import React from 'react';

const Hero = () => {
  return (
    <div className='relative mx-auto max-w-screen-2xl'>
      <div className='absolute z-10 flex w-full justify-center pt-3 md:pt-16'>
        <span className='p-2 text-4xl font-black text-white outline md:text-8xl'>
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
