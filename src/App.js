import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// redux actions
import { fetchWeatherAndForecast } from './store/actions/currentWeather.actions';

// Pages imports
import NavBar from './components/NavBar';
import Weather from './pages/Weather';
import Favorite from './pages/Favorite';

// default city to fetch weather on first loading
const DEFAULT_CITY = {
  id: '215854',
  cityName: "Tel Aviv"
}

function App({ fetchDefaultCityData }) {

  useEffect(() => {
    // fetching the default city data to display
    // on weather page after application first loaded
    fetchDefaultCityData(DEFAULT_CITY);
  }, [])


  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path='/' component={Weather} />
        <Route path='/favorites' component={Favorite} />
        </div>
    </Router>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchDefaultCityData: defaultCity => dispatch(fetchWeatherAndForecast(defaultCity))
})

export default connect(null, mapDispatchToProps)(App);
