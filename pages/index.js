import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Server Rendered React App!</h1>
      <p className="description">
        There's so much exciting things happening from here!
      </p>

      <div>Example content here. CSS is loaded from a static file!</div>
    </div>
  </div>
);

export default Home;
