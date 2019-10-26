import Link from 'next/link';

const Nav = () => (
  <nav>
    <section className="left">
      <Link href="/">
        <a>Home</a>
      </Link>
    </section>
    <section className="right">
      <a>This goes somewhere</a>
      <a>maybe</a>
    </section>
  </nav>
);

export default Nav;
