import React from 'react';
import { client, urlFor } from '../../lib/client';

const ProductDetails = ({ product }) => {
  const { image, name, price } = product;
  return (
    <div>
      {name}
      <img src={urlFor(image[0])} alt='' />
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
        slug {
            current
        }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  return { props: { product } };
};

export default ProductDetails;
