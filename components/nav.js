import React from 'react';
import useDeviceOrientation from '@rehooks/device-orientation';

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
    <section className="right"></section>
  </nav>
);

function MyComponent() {
  let value = useDeviceOrientation();
  console.log(value);
  return (
    <div>
      <p>Absolute: {value.absolute}</p>
      <p>Alpha: {value.alpha}</p>
      <p>Beta: {value.beta}</p>
      <p>Gamma: {value.gamma}</p>
    </div>
  );
}


export default MyComponent;
