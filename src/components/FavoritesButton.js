import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

// redux actions
import { addFavorite, removeFavorite } from '../store/actions/favorites.actions';


const FavoritesButton = ({ isFavorite, city, removeFav, addFav }) => {
  return (
    <div onClick={isFavorite ?() => removeFav(city):() => addFav(city)}>
      {
        isFavorite ?
          <span><FontAwesomeIcon icon={faHeart} /></span>
          :
          <span><FontAwesomeIcon icon={farHeart} /></span>
      }
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addFav: city => dispatch(addFavorite(city)),
  removeFav: city => dispatch(removeFavorite(city))
})

export default connect(null, mapDispatchToProps)(FavoritesButton);
