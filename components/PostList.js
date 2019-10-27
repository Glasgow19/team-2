import Link from 'next/link';

export default ({ posts }) => {
  const postList = posts.map(post => {
    return (
      <Link
        key={post.id}
        href={{
          pathname: '/article/[slug]',
          query: { article: JSON.stringify(post) }
        }}
        as={`/article/${post.slug}`}
      >
        <li>
          {/* dangerouslySet OK to use becuase wordpress handles escaping */}
          <a dangerouslySetInnerHTML={{ __html: post.title.rendered }}></a>
          {/* <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p> */}
        </li>
      </Link>
    );
  });

  return (
    <>
      <h2 className="subHeading">Articles</h2>
      <ul className="articles">{postList}</ul>
    </>
  );
};
