import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Product = ({ product: { image, name, slug, amiiboSeries } }) => {
  return (
    <>
      {/* amiibo */}
      <Link href={`/amiibo/${slug.current}`}>
        <div className='grid gap-y-4 text-center text-3xl font-semibold text-mossGreen'>
          <img src={urlFor(image[0])} alt='amiibo cover' />
          <span>{name}</span>
        </div>
      </Link>

      {/* // <div>
    //   <Link href={`/amiibo/${slug.current}`}>
    //     <div>
    //       {name}
    //       <img src={urlFor(image[0])} alt='' />
    //     </div>
    //   </Link>
    // </div> */}
    </>
  );
};

export default Product;
