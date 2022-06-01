import React, { useRef } from 'react';
import Link from 'next/link';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();
  return (
    <div className='grid grid-cols-1'>
      {/* empty cart */}
      {cartItems.length < 1 && (
        <div className='flex min-h-screen flex-col items-center justify-center'>
          <AiOutlineShopping size={150} />
          <h1 className=' pb-5 text-heavyGreen'>Your shopping bag is empty</h1>
          <Link href='/'>
            <a className='rounded-xl bg-darkBeige py-4 px-6 text-mossGreen shadow-xl hover:bg-darkBeige/70'>
              Continue Shopping
            </a>
          </Link>
        </div>
      )}

      {/* cart items */}
      <div className='mx-auto grid max-w-screen-2xl gap-y-5 pt-10'>
        {cartItems.length >= 1 &&
          cartItems.map((item) => (
            <div
              className='grid grid-cols-1 justify-items-center bg-lightGreen/50 p-5 md:grid-cols-2 md:gap-x-10'
              key={item._id}
            >
              {/* image */}
              <img
                src={urlFor(item?.image[0])}
                className='  h-40 w-40 rounded-xl  bg-gray-100 p-3'
              />
              {/* cart details */}
              <div className=' space-y-5 text-center md:space-y-8'>
                <div className=' space-y-2 pt-3 text-heavyGreen md:pt-0'>
                  <h1 className='text-xl'>{item.name}</h1>
                  <h2>${item.price}</h2>
                </div>
                {/* quantity counter */}
                <div className='mx-10 flex items-center justify-between space-x-3 bg-white px-3 outline outline-1 outline-darkGreen'>
                  <span onClick={''} className='hover:cursor-pointer'>
                    <AiOutlineMinus />
                  </span>
                  <span className='border-r border-l border-darkGreen px-3'>
                    {0}
                  </span>
                  <span onClick={''} className='hover:cursor-pointer'>
                    <AiOutlinePlus />
                  </span>
                </div>
                {/* delete item */}
                <button
                  type='button'
                  className=' text-pumpkinOrange'
                  onClick={''}
                >
                  <TiDeleteOutline size={30} />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
