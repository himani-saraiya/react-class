import React from 'react';
import { IceCreamProvider } from './IceCreamContext';
import ContextAPI from './ContextAPI';

const App = () => {
  return (
    <IceCreamProvider>
      <ContextAPI />
    </IceCreamProvider>
  );
};

export default App;