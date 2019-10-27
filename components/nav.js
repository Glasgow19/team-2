import Link from 'next/link';

const Nav = () => (
  <nav>
    <section className="left">
      <Link href="/">
        <a>Home</a>
      </Link>
    </section>
    <section className="right">
      <a>Success stories</a>
      <a>Clubs and activities</a>
    </section>
  </nav>
);

export default Nav;
