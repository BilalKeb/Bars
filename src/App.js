import React from 'react';
import { MapContextProvider } from './contexts/Map';
import Map from './composant/Map';

const App = () => {
  return (
    <div>

      <MapContextProvider>
        <Map />
      </MapContextProvider>
    </div>
  );
};

export default App;