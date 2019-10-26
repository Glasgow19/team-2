import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/nav';

import fetch from 'isomorphic-fetch';
import wp from '../common/wp';

const Home = ({ posts, events, err }) => {
  if (err) {
    return (
      <div>
        Oh no there's an error: <pre>{err}</pre>
      </div>
    );
  }
  // TODO: this should be part of a component!
  const postList = posts.map(post => {
    return (
      <li>
        <Link
          href={{
            pathname: '/article/[slug]',
            query: { article: JSON.stringify(post) }
          }}
          as={`/article/${post.slug}`}
        >
          <a>{post.title.rendered}</a>
        </Link>
      </li>
    );
  });

  const eventList = events.map(event => {
    return (
      <li key={event.id}>
        <a href={event.url}>{event.name.text}</a>
      </li>
    );
  });

  return (
    <div>
      <Head>
        <title>Home</title>
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
        <div>
          event list: <ul>{eventList}</ul>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const posts = await wp.posts();
  // This is a magic number for now, but in the future should come from wordpress
  // settings, or have some other search query method
  try {
    const rawEvents = await fetch(
      // `https://www.eventbriteapi.com/v3/events/search/?token=${process.env.EVENTBRITE_KEY}&organizer.id=18547082085`
      'https://pastebin.com/raw/tXtFY7xm'
    );
    const events = await rawEvents.json();
    if (!events.events) {
      return { err: 'No events found!' };
    }
    return { posts, events: events.events };
  } catch (err) {
    return { err: err.message };
  }
};

export default Home;
