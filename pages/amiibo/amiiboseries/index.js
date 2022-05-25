import React from 'react';
import { client } from '../../../lib/client';
import { GameSeries } from '../../../components';

const AmiiboSeries = ({ products }) => {
  const uniqueGameSeries = [
    ...new Set(products?.map((product) => product.gameSeries)),
  ];
  // const uniqueCharacter = [
  //   ...new Set(products?.map((product) => product.character)),
  // ];

  return (
    <>
      gameSeries
      {/* {console.log('index amiiboSeries:', products[0].gameSeries.gameSeries)} */}
      {console.log(uniqueGameSeries)};
      {/* {products?.map((product) => console.log(product.gameSeries))} */}
    </>
  );
};

export const getServerSideProps = async () => {
  // const query = '*[_type == "product"]{character} | order(character asc)';
  // console.log('query', query);

  // working query, returns all game series but not as unique values 👎
  // const query = '*[_type == "product"]{gameSeries} | order(gameSeries asc)';
  // console.log('query', query);

  // const query = '*[_type == "product"]{amiiboSeries} | order(amiiboSeries asc)';
  // console.log('query', query);

  // working query, returns 6 amiibos from the series 👍
  //   const query =
  //     '*[_type == "product" && gameSeries == "The Legend of Zelda"][0...20]';
  //   console.log('query', query);
  const products = await client.fetch(query);

  console.log('products', products);

  return { props: { products } };
};

export default AmiiboSeries;
