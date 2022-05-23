import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Product = () => {
  return (
    <div className='mx-auto grid max-w-screen-2xl grid-cols-1 place-items-center gap-y-5 pt-10 lg:grid-cols-2'>
      <img src='/images/home-1.png' alt='' />
      {/* amiibo info */}
      <div className='mx-5 flex flex-col items-center justify-center bg-lightGreen/50 p-5 text-center'>
        <h1 className='pb-3 text-4xl font-bold text-heavyGreen lg:pb-8 lg:text-5xl'>
          Mario
        </h1>
        {/* amiibo grid table */}
        <div className='grid gap-y-3 lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-10'>
          {/* amiibo series heading */}
          <div>
            <div className='rounded-md bg-darkBeige  py-2 px-20 font-semibold text-heavyGreen shadow-xl'>
              Amiibo Series
            </div>
            <span className='text-xs font-black text-mossGreen'>
              Super Smash Bros.
            </span>
          </div>
          {/* game series heading */}
          <div>
            <div className='rounded-md bg-darkBeige  py-2 px-20 font-semibold text-heavyGreen shadow-xl'>
              Game Series
            </div>
            <span className='text-xs font-black text-mossGreen'>
              Super Mario
            </span>
          </div>
          {/* price series heading */}
          <div className='lg lg:row-start-3'>
            <div className='rounded-md bg-darkBeige  py-2 px-20 font-semibold text-heavyGreen shadow-xl'>
              Price
            </div>
            <span className='text-xs font-black text-mossGreen'>$23</span>
          </div>
          {/* release heading */}
          <div className='lg:col-start-2 lg:row-span-2 lg:row-start-1'>
            <div className='rounded-md bg-darkBeige  py-2 px-20 font-semibold text-heavyGreen shadow-xl'>
              Release
            </div>
            <ul className='space-y-2 text-xs font-black text-mossGreen lg:pt-3'>
              <li>AU : 2014-11-29</li>
              <li>EU : 2014-11-28</li>
              <li>JP : 2014-12-06</li>
              <li>NA : 2014-11-21</li>
            </ul>
          </div>
        </div>

        {/* quantity counter */}
        <span className='mt-10 mb-2 text-heavyGreen'>Quantity: </span>
        <div className=' flex items-center space-x-3 bg-white px-3 outline outline-1 outline-darkGreen'>
          <span onClick={''} className='hover:cursor-pointer'>
            <AiOutlineMinus />
          </span>
          <span className='border-r border-l border-darkGreen px-3'>5</span>
          <span onClick={''} className='hover:cursor-pointer'>
            <AiOutlinePlus />
          </span>
        </div>

        <div className='space-y-4 px-7 pt-5'>
          {/* add to cart buttons */}
          <button className='w-full rounded-xl bg-transparent  px-16 py-3  text-heavyGreen outline outline-1 outline-darkGreen hover:bg-lightBeige'>
            Add to cart
          </button>
          {/* buy now button */}
          <button className='w-full rounded-xl bg-pumpkinOrange py-3 px-16 text-white shadow-2xl hover:bg-orange-500'>
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};
// const Product = ({
//   product: { image, name, slug, price, character, amiiboSeries },
// }) => {
//   return (
//     <div>
//       {/* <Link href={`/product/${slug.current}`}> */}
//       <div>
//         {name}
//         {/* {console.log(urlFor(image[0]).url())} */}
//         {/* <img src={urlFor(image[0])} alt='' /> */}
//       </div>
//       {/* </Link> */}
//     </div>
//   );
// };

export default Product;
