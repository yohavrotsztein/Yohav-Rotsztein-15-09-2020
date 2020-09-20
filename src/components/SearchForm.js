import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { fetchWeatherAndForecast } from '../store/actions/currentWeather.actions';
import { setSuggestionsStatus } from '../store/actions/cities.actions';

import CitySuggestions from './CitySuggestions';
import SearchComponent from './SearchComponent';

const SearchForm = ({ citiesList, showSuggestions, closeSuggestions, getLocationWeather }) => {

  const [inputErr, setInputErr] = useState(false);
  const formRef = useRef();
  const on_submit = e => {
    e.preventDefault();

    if (!inputErr) {
        setInputErr(null);
        closeSuggestions();

        // take the first city from the cities list in store
        // and create city object for sending to the getLocationWeather
        // function as expected.

        const [cityInfo] = citiesList;
        if (cityInfo) {
            const city = {
                cityName: cityInfo.LocalizedName,
                id: cityInfo.Key
            }
            getLocationWeather(city);
        }
        else setInputErr('No city Found');
    }
    e.target.reset() // reset form
  }

  return (
    <form ref={formRef} onSubmit={on_submit}>
      <SearchComponent setInputErr={setInputErr} />
      {inputErr && <div> {inputErr} </div>}
      {
        (citiesList && showSuggestions) ?
          <CitySuggestions formRef={formRef} cities={citiesList} />
          :
          null
      }
    </form>
  )
}

const mapStateToProps = state => ({
  citiesList: state.cities.citiesList,
  showSuggestions: state.cities.isSuggestionShown
});

const mapDispatchToProps = dispatch => ({
  closeSuggestions: () => dispatch(setSuggestionsStatus(false)),
  getLocationWeather: city => dispatch(fetchWeatherAndForecast(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
