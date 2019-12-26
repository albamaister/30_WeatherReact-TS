import React from 'react';
import WeatherLocation from './components/WeatherLocation/WeatherLocation';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      Weather App (Aplicacion del clima)!
      <WeatherLocation></WeatherLocation>
    </div>
  );
}

export default App;
