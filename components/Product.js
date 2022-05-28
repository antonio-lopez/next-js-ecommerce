import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug } }) => {
  return (
    <>
      {/* amiibo */}
      <Link href={`/amiibo/${slug.current}`}>
        <div className='grid gap-y-4 justify-self-center text-center text-3xl font-semibold text-mossGreen hover:cursor-pointer'>
          <span>{name}</span>
          <img src={urlFor(image[0])} alt='amiibo cover' />
        </div>
      </Link>
    </>
  );
};

export default Product;
