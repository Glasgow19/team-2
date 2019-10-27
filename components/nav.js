import Link from 'next/link';

const Nav = ({ posts }) => (
  <nav>
    <section className="left">
      <Link href="/">
        <a>Home</a>
      </Link>
    </section>
    <section className="right">
      <Link href={{
        pathname: '/sustories'
      }} as={'/sustories'}>
      <a>Success stories</a>
      </Link>
      <a>Clubs and activities</a>
    </section>
  </nav>
);

export default Nav;
