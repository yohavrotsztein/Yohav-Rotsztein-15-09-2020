import React from 'react';
import { connect } from 'react-redux';

// redux actions
import { setSuggestionsStatus } from '../store/actions/cities.actions';
import { fetchWeatherAndForecast } from '../store/actions/currentWeather.actions';

const CitySuggest = ({ city, country, id, getLocationWeather, closeSuggestions, formRef }) => {
  return (
    <div onClick={() => {getLocationWeather({id,cityName: city});
        formRef.current.reset()
        closeSuggestions();}}>
      <i className="fas fa-map-marked-alt" />
      <span>{city},{' '}{country}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  getLocationWeather: city => dispatch(fetchWeatherAndForecast(city)),
  closeSuggestions: () => dispatch(setSuggestionsStatus(false))
});

export default connect(null, mapDispatchToProps)(CitySuggest);
