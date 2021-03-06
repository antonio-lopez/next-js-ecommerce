import React from 'react';
import { client, urlFor } from '../../lib/client';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateContext } from '../../context/StateContext';
import Link from 'next/link';

const ProductDetails = ({ product }) => {
  const { image, name, price, amiiboSeries, gameSeries, au, eu, jp, na } =
    product;
  const { decQty, incQty, qty, onAdd } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
  };

  return (
    <div className='mx-auto grid max-w-screen-2xl grid-cols-1 place-items-center gap-y-5 pt-10 lg:grid-cols-2'>
      <img src={urlFor(image[0])} alt='amiibo' />
      {/* amiibo info */}
      <div className='mx-5 flex flex-col items-center justify-center bg-lightGreen/50 p-5 text-center'>
        <h1 className='pb-3 text-4xl font-bold text-heavyGreen lg:pb-8 lg:text-5xl'>
          {name}
        </h1>
        {/* amiibo grid table */}
        <div className='grid gap-y-3 lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-10'>
          {/* amiibo series heading */}
          <div>
            <div className='rounded-md bg-darkBeige  py-2 px-20 font-semibold text-heavyGreen shadow-xl'>
              Amiibo Series
            </div>
            <span className='text-xs font-black text-mossGreen'>
              {amiiboSeries}
            </span>
          </div>
          {/* game series heading */}
          <div>
            <div className='rounded-md bg-darkBeige  py-2 px-20 font-semibold text-heavyGreen shadow-xl'>
              Game Series
            </div>
            <span className='text-xs font-black text-mossGreen'>
              {gameSeries}
            </span>
          </div>
          {/* price series heading */}
          <div className='lg lg:row-start-3'>
            <div className='rounded-md bg-darkBeige  py-2 px-20 font-semibold text-heavyGreen shadow-xl'>
              Price
            </div>
            <span className='text-xs font-black text-mossGreen'>${price}</span>
          </div>
          {/* release heading */}
          <div className='lg:col-start-2 lg:row-span-2 lg:row-start-1'>
            <div className='rounded-md bg-darkBeige  py-2 px-20 font-semibold text-heavyGreen shadow-xl'>
              Release
            </div>
            <ul className='space-y-2 pt-3 text-xs font-black text-mossGreen'>
              <li>AU : {au}</li>
              <li>EU : {eu}</li>
              <li>JP : {jp}</li>
              <li>NA : {na}</li>
            </ul>
          </div>
        </div>

        {/* quantity counter */}
        <span className='mt-10 mb-2 text-heavyGreen'>Quantity: </span>
        <div className=' flex items-center space-x-3 bg-white px-3 outline outline-1 outline-darkGreen'>
          <span onClick={decQty} className='hover:cursor-pointer'>
            <AiOutlineMinus />
          </span>
          <span className='border-r border-l border-darkGreen px-3'>{qty}</span>
          <span onClick={incQty} className='hover:cursor-pointer'>
            <AiOutlinePlus />
          </span>
        </div>

        <div className='space-y-4 px-7 pt-5'>
          {/* add to cart buttons */}
          <button
            onClick={() => onAdd(product, qty)}
            className='w-full rounded-xl bg-transparent  px-16 py-3  text-heavyGreen outline outline-1 outline-darkGreen hover:bg-lightBeige'
          >
            Add to cart
          </button>
          {/* buy now button */}
          <Link href={'/cart'}>
            <button
              onClick={handleBuyNow}
              className='w-full rounded-xl bg-pumpkinOrange py-3 px-16 text-white shadow-2xl hover:bg-orange-500'
            >
              Buy now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
        slug {
            current
        }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  return { props: { product } };
};

export default ProductDetails;
