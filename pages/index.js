import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

import PostList from '../components/PostList';
import EventList from '../components/EventList';

import fetch from 'isomorphic-fetch';
import wp from '../common/wp';

const Home = ({ posts, events, err }) => {
  if (err) {
    // TODO: style this!
    return (
      <div>
        Oh no there's an error: <pre>{err}</pre>
      </div>
    );
  }

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
          post list:
          <PostList posts={posts} />
        </div>
        <div>
          event list: <EventList events={events} />
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
