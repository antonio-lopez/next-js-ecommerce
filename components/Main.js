import Link from 'next/link';
import React from 'react';

const Main = () => {
  return (
    <section className='mx-auto grid max-w-screen-2xl grid-cols-1 place-items-center gap-y-7 pt-10 md:grid-cols-2 md:gap-y-16 md:pt-16'>
      {/* details 1 */}
      {/* image 1 */}
      <img
        className=' w-1/2 rounded-xl py-8 px-12 outline outline-1 outline-darkGreen'
        src='/images/home-1.png'
        alt='home amiibo one'
      />
      {/* text 1 */}
      <div className='mx-5 flex flex-col items-center justify-center bg-lightGreen/50 p-10 text-center md:h-full'>
        <h1 className='pb-6 text-3xl font-semibold text-heavyGreen lg:text-5xl'>
          Large Selection
        </h1>
        <p className='pb-7 text-xs font-black text-mossGreen lg:px-16 lg:text-base'>
          Every item sold goes through our proprietary multi-step verification
          process with our team of expert authenticators.
        </p>
        {/* button */}
        <Link href={`/amiibo/amiibos`}>
          <a className='rounded-xl bg-darkBeige  py-4 px-6 text-mossGreen shadow-xl hover:bg-lightBeige'>
            Browse by character
          </a>
        </Link>
      </div>

      {/* details 2 */}
      {/* image 2 */}
      <img
        className=' w-1/2 rounded-xl py-8 px-12 outline outline-1 outline-darkGreen'
        src='/images/home-2.png'
        alt='home amiibo two'
      />
      {/* text 2 */}
      <div className='mx-5 flex flex-col items-center justify-center bg-lightGreen/50 p-10 text-center md:row-start-2 md:h-full'>
        <h1 className='pb-6 text-3xl font-semibold text-heavyGreen lg:text-5xl'>
          Transparent Pricing
        </h1>
        <p className='pb-7 text-xs font-black text-mossGreen lg:px-16 lg:text-base'>
          Our real-time marketplace works just like the stock market – allowing
          you to buy and sell the most coveted items at their true market price.
        </p>
        {/* button */}
        <a
          className='rounded-xl bg-darkBeige  py-4 px-6 text-mossGreen shadow-xl hover:bg-lightBeige'
          href={`/amiibo/gameseries`}
        >
          Browse by game Series
        </a>
      </div>

      {/* details 3 */}
      {/* image 3 */}
      <img
        className=' w-1/2 rounded-xl py-8 px-12 outline outline-1 outline-darkGreen'
        src='/images/home-3.png'
        alt='home amiibo three'
      />
      {/* text 3 */}
      <div className='mx-5 flex flex-col items-center justify-center bg-lightGreen/50 p-10 text-center md:h-full'>
        <h1 className='pb-6 text-3xl font-semibold text-heavyGreen'>
          Customer Service
        </h1>
        <p className='pb-7 text-xs font-black text-mossGreen lg:px-16 lg:text-base'>
          We pride ourselves in customer service, and will always do our best to
          ensure your satisfaction with your purchase. If you have any issues at
          all, please never hesitate to contact our customer service team.
        </p>
        {/* button */}
        <a
          className='rounded-xl bg-darkBeige  py-4 px-6 text-mossGreen shadow-xl hover:bg-lightBeige'
          href={`/amiibo/amiiboseries`}
        >
          Browse by amiibo series
        </a>
      </div>
    </section>
  );
};

export default Main;
