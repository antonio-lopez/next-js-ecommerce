import React from 'react';

const Main = () => {
  return (
    <section className='grid grid-cols-1 place-items-center space-y-8 pt-10 md:grid-cols-2'>
      {/* details 1 */}
      <img
        className=' w-1/2 rounded-xl py-8 px-12 outline outline-1 outline-darkGreen'
        src='/images/home-1.png'
        alt='home amiibo one'
      />
      <div className='m-5 bg-lightGreen/50 p-10 text-center'>
        <h1 className='pb-6 text-3xl font-semibold text-heavyGreen'>
          Large Selection
        </h1>
        <p className='pb-7 text-xs font-black text-mossGreen'>
          Every item sold goes through our proprietary multi-step verification
          process with our team of expert authenticators.
        </p>
        {/* button */}
        <a
          className='rounded-xl bg-darkBeige  py-4 px-6 text-mossGreen shadow-xl hover:bg-lightBeige'
          href=''
        >
          Browse by character
        </a>
      </div>
      {/* details 2 */}
      <img
        className=' w-1/2 rounded-xl py-8 px-12 outline outline-1 outline-darkGreen'
        src='/images/home-2.png'
        alt='home amiibo two'
      />
      <div className='m-5 bg-lightGreen/50 p-10 text-center '>
        <h1 className='pb-6 text-3xl font-semibold text-heavyGreen'>
          Transparent Pricing
        </h1>
        <p className='pb-7 text-xs font-black text-mossGreen'>
          Our real-time marketplace works just like the stock market – allowing
          you to buy and sell the most coveted items at their true market price.
        </p>
        {/* button */}
        <a
          className='rounded-xl bg-darkBeige  py-4 px-6 text-mossGreen shadow-xl hover:bg-lightBeige'
          href=''
        >
          Browse by Amiibo Series
        </a>
      </div>
      {/* details 3 */}
      <img
        className=' w-1/2 rounded-xl py-8 px-12 outline outline-1 outline-darkGreen'
        src='/images/home-3.png'
        alt='home amiibo three'
      />
      <div className='m-5 bg-lightGreen/50 p-10 text-center '>
        <h1 className='pb-6 text-3xl font-semibold text-heavyGreen'>
          Customer Service
        </h1>
        <p className='pb-7 text-xs font-black text-mossGreen'>
          We pride ourselves in customer service, and will always do our best to
          ensure your satisfaction with your purchase. If you have any issues at
          all, please never hesitate to contact our customer service team.
        </p>
        {/* button */}
        <a
          className='rounded-xl bg-darkBeige  py-4 px-6 text-mossGreen shadow-xl hover:bg-lightBeige'
          href=''
        >
          Browse by game series
        </a>
      </div>
    </section>
  );
};

export default Main;
