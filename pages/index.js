import React from 'react';
import { client } from '../lib/client';
import { Hero, Main } from '../components';

const Home = () => {
  return (
    <>
      <Hero />
      <Main />
    </>
  );
};

export default Home;
