import React from 'react';
import { client } from '../lib/client';

const GameSeries = ({ products }) => {
  return (
    <div>
      {console.log('products', products)}
      gameSeries
      {products?.map((product) => console.log(product))}
      {console.log('products', products.gameSeries)}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"][0...5]';
  console.log('query', query);
  const products = await client.fetch(query);

  console.log('products', products);

  return { props: { products } };
};

export default GameSeries;
