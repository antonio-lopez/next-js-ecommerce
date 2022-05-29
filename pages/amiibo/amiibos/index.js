import React from 'react';
import Link from 'next/link';
import { amiibo } from '../../../data';

const AllAmiibos = () => {
  return (
    <div className='mx-auto max-w-screen-2xl'>
      <h1 className='pt-10 text-center text-4xl text-heavyGreen'>
        Amiibo Characters
      </h1>
      <ul className='grid grid-cols-2 grid-rows-2 place-items-center gap-y-3 pt-10 lg:grid-cols-4'>
        {amiibo.map((item) => (
          <li
            className='text-heavyGreen hover:bg-lightGreen/50'
            key={item.slug.current}
          >
            <Link href={`/amiibo/${item.slug.current}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllAmiibos;
