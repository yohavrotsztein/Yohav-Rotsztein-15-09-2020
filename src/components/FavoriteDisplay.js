import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// redux actions
import { fetchWeatherAndForecast } from '../store/actions/currentWeather.actions';


const FavoriteDisplay = ({ getLocationWeather, city, Temperature, WeatherText, history, WeatherIcon }) => {

  const clickHandle = () => {
    getLocationWeather(city);
    history.push('/');
  }

  return (
    <div className="favorite-info" onClick={clickHandle}>
      <div className="favorite-icon">
        <img src={require(`../images/weather-icons/${WeatherIcon}.png`)} />
      </div>
      <div className="favorite-name">
        <span>{city.cityName}</span>
      </div>
      <div className="favorite-temp">
        <span>{Temperature.Metric.Value}°C</span>
      </div>
      <div className="favorite-state">
        <span>{WeatherText}</span>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  getLocationWeather: city => dispatch(fetchWeatherAndForecast(city)),
});

export default withRouter(connect(null, mapDispatchToProps)(FavoriteDisplay));
