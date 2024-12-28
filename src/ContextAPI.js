import React, { useContext } from 'react';
import { IceCreamContext } from './IceCreamContext';

const ContextAPI = () => {
  const { iceCreamFlavor, setIceCreamFlavor } = useContext(IceCreamContext);

  return (
    <div>
      <h1>Student's Favorite Ice Cream Flavor</h1>
      <p>Current flavor: {iceCreamFlavor}</p>
      <button onClick={() => setIceCreamFlavor('Vanilla')}>Vanilla</button>
      <button onClick={() => setIceCreamFlavor('Strawberry')}>Strawberry</button>
    </div>
  );
};
export default ContextAPI;