import React from 'react';
import { connect } from 'react-redux';

import DailyWeather from './DailyWeather';

const WeatherForecast = ({ dailyForcasts, fetchErr }) => {
  let content;
  if (fetchErr) {
    content = null;
  } else if (dailyForcasts) {
    content =
      dailyForcasts.map(item =>
        <DailyWeather key={item.EpochDate} {...item} />
    )
  }
  return (
    <div className="forecast-info">
      {content}
    </div>
  )
}

const mapStateToProps = state => ({
  dailyForcasts: state.currentWeather.forecast,
  fetchErr: state.currentWeather.fetchErr
});

export default connect(mapStateToProps)(WeatherForecast);
