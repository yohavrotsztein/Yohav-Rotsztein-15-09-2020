import React from 'react';

import WeatherForecast from '../components/WeatherForecast';
import CurrentCondition from '../components/CurrentCondition';

const Weather = () => {

  return (
    <div className="weather">
      <div className="main-weather">
        <CurrentCondition />
      </div>
      <div className="forecast-weather">
        <WeatherForecast />
      </div>
    </div>
  )
}

export default Weather;
