import React from 'react';
import Head from 'next/head';
import MyComponent from '../components/nav';


// window.onload = function() {
//   MyComponent();
// };

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <MyComponent/>

    <div className="hero">
      <h1 className="title">Hello, changes!</h1>
      <p className="description">
        mycomponent data: MyComponent();
      </p>
    </div>
  </div>
);

export default Home;

