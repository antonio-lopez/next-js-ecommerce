import React from 'react';
import { client } from '../lib/client';
import { urlFor } from '../lib/client';
import { Layout, Footer, Navbar, Product, Cart } from '../components';

const Home = ({ products }) => {
  return (
    <>
      <div>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste facilis
          ipsam nisi nobis sint minima asperiores cupiditate eligendi
          repellendus libero ullam suscipit pariatur, voluptate aliquid amet
          velit provident repudiandae commodi.
        </p>
      </div>
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
      {/* <Product product={products.length && products[0]} /> */}
      {/* <Footer /> */}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"][0...5]';
  const products = await client.fetch(query);

  return { props: { products } };
};

// get all amiibos
// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   return { props: { products } };
// };

export default Home;
