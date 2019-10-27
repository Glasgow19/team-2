import Link from 'next/link';

const Nav = () => (
  <nav>
    <section className="left">
      <Link href="/">
        <a>Home</a>
      </Link>
    </section>
    <section className="right">
      <Link href={{
        pathname: '/sustories'
      }}>
      <a>Success stories</a>
      </Link>
      <a>Clubs and activities</a>
    </section>
  </nav>
);

export default Nav;
