import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import  appReducerA from './reducer/app_reducer';
import  appReducerB from './reducer/facet_reducer';

import thunk from "redux-thunk";

const rootReducer = combineReducers({
    rA:appReducerA,
    rB:appReducerB  
})


const store=createStore(rootReducer, applyMiddleware(thunk));

console.log(store);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

