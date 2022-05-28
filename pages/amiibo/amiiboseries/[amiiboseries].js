import React from 'react';
import { client } from '../../../lib/client';
import Product from '../../../components/Product';

const AmiiboSeries = ({ series }) => {
  return (
    <div className='mx-auto grid max-w-screen-2xl grid-cols-1  gap-y-5   pt-10  lg:grid-cols-4'>
      <h1 className='pb-5 text-center text-5xl font-bold text-heavyGreen lg:col-span-4'>
        {series[0].amiiboSeries} Series
      </h1>
      {series.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{amiiboSeries}`;

  const amiiboSeries = await client.fetch(query);
  console.log('amiiboSeries', amiiboSeries);

  const paths = amiiboSeries.map((series) => ({
    params: {
      amiiboseries: series.amiiboSeries,
    },
  }));

  console.log('paths', paths);

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { amiiboseries } }) => {
  console.log('getStaticProps slug', amiiboseries);
  const query = `*[_type == "product" && amiiboSeries == "${amiiboseries}"]`;
  console.log('query', query);
  const series = await client.fetch(query);
  console.log('getStaticProps series', series);

  return { props: { series } };
};

export default AmiiboSeries;
