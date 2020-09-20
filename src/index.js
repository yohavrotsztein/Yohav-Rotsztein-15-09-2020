import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style/style.scss"


import { store } from './store/store';
import { Provider } from 'react-redux';



ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>, document.getElementById('root'));
