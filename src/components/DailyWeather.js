import React from 'react';
import Moment from 'react-moment';


const dailyWeather = ({ Temperature, Date: date, Day }) => {
  return (
    <div className="forecast-cell">
      <div className="forecast-icon">
        <img src={require(`../images/weather-icons/${Day.Icon}.png`)} />
      </div>
      <div className="forecast-day">
        <Moment format='ddd'>
          {date}
        </Moment>
      </div>
      <div className="forecast-temp">
        <span>{`${Temperature.Minimum.Value}°C`}</span>
      </div>
      <div className="forecast-state">
        <span> {Day.IconPhrase}</span>
      </div>
    </div>
  )
}

export default dailyWeather;
