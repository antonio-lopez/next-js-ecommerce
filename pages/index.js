import React from 'react';
import { client } from '../lib/client';
import { urlFor } from '../lib/client';
import { Hero, Main, Product, Products, Cart } from '../components';

const Home = ({ products }) => {
  return (
    <>
      {/* <Hero />
      <Main /> */}
      {/* <Products /> */}
      <div>
        <h1>Title</h1>
      </div>
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}

      {/* <Product product={products.length && products[0]} /> */}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"][0...5]';
  const products = await client.fetch(query);

  console.log(products);

  return { props: { products } };
};

// get all amiibos
// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   return { props: { products } };
// };

export default Home;
