import React from 'react';

import CitySuggest from './CitySuggest';

// auto suggestions component (on search)
const CitySuggestions = ({ cities, formRef }) => {
  return (
    <div>
      {
        cities
          .filter((city, i) => i < 5) // display only 5 options
          .map(city =>
            <CitySuggest
              key={city.Key}
              id={city.Key}
              city={city.LocalizedName}
              country={city.Country.LocalizedName}
              formRef={formRef} />
          )
      }
    </div>
  )
}



export default CitySuggestions;
