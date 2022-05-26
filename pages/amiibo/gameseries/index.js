import React from 'react';
import Link from 'next/link';
import { gameSeries } from '../../../data';

const GameSeries = () => {
  return (
    <ul>
      {gameSeries.map((item) => (
        <li key={item.id}>
          <Link href={`/amiibo/amiiboseries/${item.name.replace(/ /g, '')}`}>
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GameSeries;
