import axios from 'axios';

const apiKey = 'zFBbzbCAieCOH1wOpABS61IqpBcZX0Zz';

export const getCitiesOptions = str => {
    return axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${str}`);
}

export const getCurrentWeather = cityKey => {
    return axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`);
}

export const getForecast = cityKey => {
    return axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&metric=true`);
}
