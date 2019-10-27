import PostList from '../components/PostList';
import wp from '../common/wp';
import Nav from '../components/nav';

const Sustories = ({ posts }) => {
    console.log(posts)
    return (
        <div>
            <Nav />
            <header className="articletitle">Success stories</header>
            <PostList posts={posts} />
        </div>
    )
}

Sustories.getInitialProps = async () => {
    const posts = await wp.posts();
    return { posts };
};

export default Sustories;