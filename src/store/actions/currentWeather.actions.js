import { getCurrentWeather, getForecast } from '../../API';

const actionTypes = {
  FETCH_WEATHER_SUCCESS: 'FETCH_WEATHER_SUCCESS',
  SET_CURRENT_CITY: 'SET_CURRENT_CITY',
  FETCH_FORECAST_SUCCESS: 'FETCH_FORECAST_SUCCESS',
  SET_FETCH_ERR: 'SET_FETCH_ERR',
}

const setCurrentCity = payload => ({
  type: actionTypes.SET_CURRENT_CITY,
  payload
});


const fetchWeatherSucces = payload => ({
  type: actionTypes.FETCH_WEATHER_SUCCESS,
  payload
});


const fetchForecastSucces = payload => ({
  type: actionTypes.FETCH_FORECAST_SUCCESS,
  payload
});

const setfetchErr = payload => ({
  type: actionTypes.SET_FETCH_ERR,
  payload
});


export const fetchWeatherAndForecast = city => {
  return dispatch => {
    dispatch(setCurrentCity(city));

    // fetch weather and forecast parallel
    Promise.all([
      getCurrentWeather(city.id),
      getForecast(city.id)
    ]).then(responses => {
      dispatch(setfetchErr(null));
      dispatch(fetchWeatherSucces(responses[0].data))
      dispatch(fetchForecastSucces(responses[1].data.DailyForecasts))
      console.log(responses)
    })
      .catch(err => dispatch(setfetchErr(err)));
  }
}
