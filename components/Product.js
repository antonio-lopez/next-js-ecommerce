import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Product = ({
  product: { image, name, slug, price, character, amiiboSeries },
}) => {
  return (
    <div>
      {/* <Link href={`/product/${slug.current}`}> */}
      <Link href={`/amiibo/${slug.current}`}>
        <div>
          {name}
          {/* {console.log(urlFor(image[0]).url())} */}
          <img src={urlFor(image[0])} alt='' />
        </div>
      </Link>
    </div>
  );
};

export default Product;
