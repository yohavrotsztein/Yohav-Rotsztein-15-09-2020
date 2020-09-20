import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFavoritesWeatherAsync } from '../store/actions/favorites.actions';
import FavoriteDisplay from '../components/FavoriteDisplay';

const FavoritesPage = ({ favoritesList, favesWeather, getFavesWeather, fetchErr }) => {

  // get the updated weather on favorites cities
  useEffect(() => {
    if (favoritesList.length > 0) {
      getFavesWeather(favoritesList);
    }
  }, []);


  let content;
  if (favoritesList.length === 0) {
    content = <div className="error" style={{margin:"auto"}}>
              <img src={require("../images/error.png")} />
              <h1>You don't have favorite cities yet</h1>
              <p>You might have exceeded the API call or your connection has a problem.</p>
              </div>;
  }
  else if (fetchErr) {
    content = <div className="error" style={{margin:"auto"}}>
              <img src={require("../images/error.png")} />
              <h1>We are sorry, a mistake occured</h1>
              <p>You might have exceeded the API call or your connection has a problem.</p>
              </div>;
  }
  else if (favesWeather.length > 0) {
    content = favesWeather.map((fav, i) =>
      <FavoriteDisplay
        city={favoritesList[i]}
        key={favoritesList[i].Key}
        {...fav} />)
  }
  else content = <span className="loading" style={{margin:"auto"}}>Loading...</span>

  return (
    <div className="favorite-display">
        <h1>Favorites</h1>
        <div style={{display:"flex"}}>
            {content}
        </div>
    </div>
  )
}

const mapStateToProps = state => ({
    favoritesList: state.favorites.favesList,
    favesWeather: state.favorites.favesWeather,
    fetchErr: state.favorites.fetchErr
});

const mapDispatchToProps = disptach => ({
    getFavesWeather: favesList => disptach(fetchFavoritesWeatherAsync(favesList))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
