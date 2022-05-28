import React from 'react';
import Link from 'next/link';
import { amiiboSeries } from '../../../data';

const AmiiboSeries = () => {
  return (
    <ul>
      {amiiboSeries.map((item) => (
        <li key={item.id}>
          <Link href={`/amiibo/amiiboseries/${item.name}`}>
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AmiiboSeries;
