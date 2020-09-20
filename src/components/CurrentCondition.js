import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';


import FavoritesButton from './FavoritesButton';
import SearchForm from '../components/SearchForm';

const CurrentCondition = ({ city, currentCityCondition, favorites, fetchErr }) => {

  let content;
  if (fetchErr) {
    content = <div className="error">
              <img src={require("../images/error.png")} />
              <h1>We are sorry, a mistake occured</h1>
              <p>You might have exceeded the API call or your connection has a problem.</p>
              </div>;
  }
  else if (currentCityCondition) {
    const { Temperature, LocalObservationDateTime, WeatherText: status ,WeatherIcon} = currentCityCondition[0];
    content = (
      <React.Fragment>
        <div className="current-condition">
          <div className="search-box">
            <SearchForm />
          </div>
          <div className="current-condition-info">
            <div className="left-side">
              <div className="city">
                <span>{city.cityName}</span>
                <FavoritesButton
                  isFavorite={favorites.some(fav => fav.id === city.id)}
                  city={city}
                />
              </div>
              <Moment format='dddd'>{LocalObservationDateTime}</Moment><br></br>
              <Moment format='LL'>{LocalObservationDateTime}</Moment>
            </div>
            <div className="right-side">
              <div>
                <span className="temp">{Temperature.Metric.Value}°C </span>
              </div>
              <div>
                <img src={require(`../images/weather-icons/${WeatherIcon}.png`)} />
                <span className="state"> {status} </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
  else content = <div className="loading">Loading...</div>;

  return content;
}


const mapStateToProps = state => ({
  city: state.currentWeather.currentCity,
  currentCityCondition: state.currentWeather.currentCondition,
  fetchErr: state.currentWeather.fetchErr,
  favorites: state.favorites.favesList
});


export default connect(mapStateToProps)(CurrentCondition);
