import React from 'react';
import useDeviceOrientation from '@rehooks/device-orientation';


const Nav = () => <>Example component!</>;

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
