import Link from 'next/link';
import wp from '../common/wp';

export default ({ posts }) => {
  const postList = posts.map(post => {
    return (
      <li key={post.id}>
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

  return <ul className="articles">{postList}</ul>;
};
