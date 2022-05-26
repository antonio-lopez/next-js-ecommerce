import React from 'react';
import Link from 'next/link';
import { amiibo } from '../../../data';

const AllAmiibos = () => {
  return (
    <ul>
      {amiibo.map((item) => (
        <li key={item.slug.current}>
          <Link href={`/amiibo/${item.slug.current}`}>
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AllAmiibos;
