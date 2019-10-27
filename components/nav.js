import Link from 'next/link';

const Nav = () => (
  <nav>
    <section className="left">
      <Link href="/">
        <a>
          <img src="/dressCODE_Final_white.png" />
        </a>
      </Link>
    </section>
    <section className="right">
      <Link href={{
        pathname: '/sustories'
      }}>
      <a>Success stories</a>
      </Link>
    </section>
  </nav>
);

export default Nav;
