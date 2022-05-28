import React from 'react';
import { client } from '../../../lib/client';
import Product from '../../../components/Product';

const GameSeries = ({ series }) => {
  return (
    <div className='mx-auto grid max-w-screen-2xl grid-cols-1  gap-y-5   pt-10  lg:grid-cols-4'>
      <h1 className='pb-5 text-center text-5xl font-bold text-heavyGreen lg:col-span-4'>
        {series[0].gameSeries} Series
      </h1>
      {series.map((product) => (
        <Product key={product.id} product={product} />
      ))}{' '}
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{gameSeries}`;
  const gameSeries = await client.fetch(query);

  const paths = gameSeries.map((series) => ({
    params: {
      gameseries: series.gameSeries,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { gameseries } }) => {
  const query = `*[_type == "product" && gameSeries == "${gameseries}"]`;
  const series = await client.fetch(query);

  return { props: { series } };
};

export default GameSeries;
