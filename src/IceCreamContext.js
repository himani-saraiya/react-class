import React, { createContext, useState } from 'react';

const IceCreamContext = createContext();

const IceCreamProvider = ({ children }) => {
  const [iceCreamFlavor, setIceCreamFlavor] = useState('Chocolate');

  return (
    <IceCreamContext.Provider value={{ iceCreamFlavor, setIceCreamFlavor }}>
      {children}
    </IceCreamContext.Provider>
  );
};

export { IceCreamProvider, IceCreamContext };
