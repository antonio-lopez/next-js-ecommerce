import React, { useEffect } from 'react';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';
import { FaShoppingCart } from 'react-icons/fa';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className=' flex min-h-screen items-center justify-center px-8 text-heavyGreen'>
      <div className='flex flex-col items-center space-y-5 bg-lightGreen/50 p-8 lg:p-10'>
        <FaShoppingCart size={50} />
        <h1 className=' text-xl text-heavyGreen lg:text-4xl'>
          Thank you for your order!
        </h1>
        <p className=' text-center text-xs text-mossGreen lg:text-sm'>
          Your order is being proccessed. Check your email inbox for the
          receipt.{' '}
        </p>
        {/* button */}
        <Link href={`/`}>
          <a className='rounded-xl bg-darkBeige  py-4 px-6 text-mossGreen shadow-xl hover:bg-lightBeige'>
            Continue shopping
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Success;
