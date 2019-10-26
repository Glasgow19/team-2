import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/nav';

import wp from '../common/wp';

const Home = ({ posts }) => {
  const postList = posts.map(post => {
    return (
      <li>
        <Link
          href={{ pathname: '/article/[slug]' }}
          as={`/article/${post.slug}`}
        >
          <a>{post.title.rendered}</a>
        </Link>
      </li>
    );
  });

  return (
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
        <div>
          post list:<ul>{postList}</ul>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const posts = await wp.posts();
  return { posts };
};

export default Home;
