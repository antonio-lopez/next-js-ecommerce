import React from 'react';
import { client } from '../lib/client';
import { urlFor } from '../lib/client';
import { Layout, Footer, Navbar, Product, Cart } from '../components';

const Home = ({ products }) => {
  return (
    <>
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
      {/* <Product product={products.length && products[0]} /> */}
      {/* <Footer /> */}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return { props: { products } };
};

export default Home;
