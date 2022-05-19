import React from 'react';

const Hero = () => {
  return (
    <div className='relative mx-auto max-w-screen-2xl'>
      <div className='absolute z-10 flex justify-center items-end w-full pt-2'>
        <span className='text-white text-xl'>Amiibo Hub</span>
      </div>
      <div className='relative'>
        <div className='bg-black opacity-30 w-full h-full absolute' />
        <img src='/images/hero-image.png' alt='hero' />
      </div>
    </div>
  );
};

export default Hero;
