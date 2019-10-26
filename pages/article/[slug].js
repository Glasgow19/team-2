import Head from 'next/head';
import wp from '../../common/wp';

const Article = ({ err, article }) => {
  if (err) {
    return (
      <>
        OH NO IT'S ALL GONE WRONG: <pre>{err}</pre>
      </>
    );
  }
  return (
    <div>
      <Head>
        <title>Article - todo</title>
      </Head>
      Hey! I'm an article. My name is {article.title.rendered}, and I was posted{' '}
      {article.modified}. Here's my content:
      {/*bad!! this should not be like this */}
      <div dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
    </div>
  );
};

Article.getInitialProps = async ({ query }) => {
  // We can save data by passing the article along if we have it from
  // another api response!
  if (query.article) {
    return { article: JSON.parse(query.article) };
  }

  const articles = await wp.posts().slug(query.slug);
  if (articles.length != 1) {
    // something is wrong
    // return error!
    return { err: `Unable to retrieve article ${query.slug}` };
  }

  return { article: articles[0] };
};

export default Article;
