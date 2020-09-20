import { getCurrentWeather } from '../../API';

const actionTypes = {
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
  FETCH_FAVORITES_WEATHER_SUCCESS: ' FETCH_FAVORITES_WEATHER_SUCCESS',
  SET_FETCH_ERR: 'SET_FETCH_ERR'
}

export const addFavorite = payload => ({
  type: actionTypes.ADD_FAVORITE,
  payload
});

export const removeFavorite = payload => ({
  type: actionTypes.REMOVE_FAVORITE,
  payload
});

const fetchErr = payload => ({
  type: actionTypes.SET_FETCH_ERR,
  payload
});

const fetchFavoritesWeatherSuccess = payload => ({
  type: actionTypes.FETCH_FAVORITES_WEATHER_SUCCESS,
  payload
});

export const fetchFavoritesWeatherAsync = favoritesList => {
  return dispatch => {
    // create an array (promises array) of api
    // calls for getting current weather in location
    const weatherCalls = favoritesList
      .map(city => getCurrentWeather(city.id));

    //run all the calls in parallel
    Promise.all(weatherCalls)
      .then(responses => {
          // transform the responses to an array of weather objects
          // and save it to store
          const weatherObjectsList = responses.map(res => res.data[0]);
          dispatch(fetchFavoritesWeatherSuccess(weatherObjectsList));
      })
      .catch(err => dispatch(fetchErr(err)))
  }
}
