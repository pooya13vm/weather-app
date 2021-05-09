import React from 'react';
import {MyProvider} from './context/weatherAppContext';
import WeatherScreen from './screens/weatherScreen';

const App = () => {
  return (
    <MyProvider>
      <WeatherScreen />
    </MyProvider>
  );
};

export default App;
