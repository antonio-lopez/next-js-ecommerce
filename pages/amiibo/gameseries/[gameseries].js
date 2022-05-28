import React from 'react';
import { client } from '../../../lib/client';
import Product from '../../../components/Product';

const GameSeries = ({ series }) => {
  return (
    <div className='mx-auto grid max-w-screen-2xl grid-cols-1  gap-y-5   pt-10  lg:grid-cols-4'>
      <h1 className='pb-5 text-center text-5xl font-bold text-heavyGreen lg:col-span-4'>
        {series[0].gameSeries} Series
      </h1>
      {/* GameSeries {console.log(series[0].gameSeries)} */}
      {series.map((product) => (
        <Product key={product.id} product={product} />
      ))}{' '}
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{gameSeries}`;

  const gameSeries = await client.fetch(query);
  // console.log('gameSeries', gameSeries);

  const paths = gameSeries.map((series) => ({
    params: {
      gameseries: series.gameSeries,
    },
  }));

  // console.log('paths', paths);

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { gameseries } }) => {
  // console.log('getStaticProps slug', gameseries);
  const query = `*[_type == "product" && gameSeries == "${gameseries}"]`;
  // console.log('query', query);
  const series = await client.fetch(query);
  // console.log('getStaticProps series', series);

  return { props: { series } };
};

// export const getStaticPaths = async () => {
//   const query = `*[_type == "product"]{gameSeries}`;

//   const gameSeries = await client.fetch(query);
//   console.log('gameSeries', gameSeries);

//   const paths = gameSeries.map((series) => ({
//     params: {
//       slug: series,
//     },
//   }));

//   console.log('paths', paths);

//   return {
//     paths,
//     fallback: 'blocking',
//   };
// };

// export const getStaticProps = async ({ params: { slug } }) => {
//   console.log('getStaticProps slug', slug);
//   const query = `*[_type == "product" && gameSeries == '${slug}']`;
//   const series = await client.fetch(query);
//   console.log('getStaticProps series', series);

//   return { props: { series } };
// };

export default GameSeries;
