import Head from 'next/head';
import Nav from '../../components/nav';
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
      <Nav />
      <Head>
        <title>Article - todo</title>
      </Head>
      <header
        className="articletitle"
        dangerouslySetInnerHTML={{ __html: article.title.rendered }}
      ></header>
      <div id="text">
        <div dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
        <div className="articledate">
          {' '}
          This article was posted {article.modified}.{' '}
        </div>
      </div>
      {/*bad!! this should not be like this */}
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
