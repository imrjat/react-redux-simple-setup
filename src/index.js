import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducers from "./reducers"
import App from './App';


ReactDOM.render(
    <Provider store={createStore(Reducers)}>
        <App />
    </Provider>, 
    document.getElementById('root'));
