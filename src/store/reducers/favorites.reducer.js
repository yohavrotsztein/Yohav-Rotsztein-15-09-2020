const actionTypes = {
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
  FETCH_FAVORITES_WEATHER_SUCCESS: ' FETCH_FAVORITES_WEATHER_SUCCESS',
  SET_FETCH_ERR: 'SET_FETCH_ERR'
}

const initialState = {
  favesList: [],
  favesWeather: [],
  fetchErr: null
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FAVORITE:
      return {
        ...state,
        favesList: [...state.favesList, action.payload]
      }
    case actionTypes.REMOVE_FAVORITE:
      return {
        ...state,
        favesList: state.favesList
            .filter(fav => fav.id !== action.payload.id)
      }
    case actionTypes.FETCH_FAVORITES_WEATHER_SUCCESS:
      return {
        ...state,
        favesWeather: action.payload
      }
    case actionTypes.SET_FETCH_ERR:
      return {
        ...state,
        fetchErr: action.payload
      }
    default:
      return state;
  }
}

export default favoritesReducer;
