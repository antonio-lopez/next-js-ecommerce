import React from 'react';
import { client } from '../../../lib/client';
import { GameSeries } from '../../../components';

const AmiiboSeries = ({ products }) => {
  return (
    <>
      gameSeries
      {console.log(products)}
    </>
  );
};

export const getServerSideProps = async () => {
  // working query, returns all game series but not as unique values 👎
  const query = '*[_type == "product"]{gameSeries}';
  console.log('query', query);
  // working query, returns 6 amiibos from the series 👍
  //   const query =
  //     '*[_type == "product" && gameSeries == "The Legend of Zelda"][0...20]';
  //   console.log('query', query);
  const products = await client.fetch(query);

  console.log('products', products);

  return { props: { products } };
};

export default AmiiboSeries;
