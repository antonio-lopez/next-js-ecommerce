import React from 'react';
import Link from 'next/link';
import { gameSeries } from '../../../data';

const GameSeries = () => {
  return (
    <div className='mx-auto max-w-screen-2xl'>
      <h1 className='pt-10 text-center text-4xl text-heavyGreen'>
        Game Series
      </h1>
      <ul className='grid grid-cols-2 grid-rows-2 place-items-center gap-y-3 pt-10 lg:grid-cols-4'>
        {gameSeries.map((item) => (
          <li className='text-heavyGreen hover:bg-lightGreen/50' key={item.id}>
            <Link href={`/amiibo/gameseries/${item.name}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameSeries;
