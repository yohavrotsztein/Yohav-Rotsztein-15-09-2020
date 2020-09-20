import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { setSuggestionsStatus } from '../store/actions/cities.actions';
import { fetchCitiesAsync } from '../store/actions/cities.actions';


const SearchComponent = ({ fetchCities, openSuggestions, setInputErr, closeSuggestions }) => {

  const onChangeHandle = async (e) => {
    const input = e.target;
    const regex = /[A-Za-z]/;

    if (input.value.length > 0) {
      openSuggestions();
    }
    else closeSuggestions();

    if (!regex.test(input.value)) {
      if (input.value.length !== 0) {
        setInputErr('*Only english letters allowed');
      }
      else {
        setInputErr(null);
      }
      return;
    }
    fetchCities(input.value);

  }
    return (
      <div style={{color :"white"}}>
      <FontAwesomeIcon icon={faSearch} />
        <input
          onChange={onChangeHandle}
          onFocus={openSuggestions}
          onBlur={() => {
            setInputErr(null);
          }}
          type='text'
          autoComplete='off'
          name='search'
           />
      </div>
    )
}

const mapDispatchToProps = dispatch => ({
  fetchCities: str => dispatch(fetchCitiesAsync(str)),
  openSuggestions: () => dispatch(setSuggestionsStatus(true)),
  closeSuggestions: () => dispatch(setSuggestionsStatus(false))

})

export default connect(null, mapDispatchToProps)(SearchComponent);
