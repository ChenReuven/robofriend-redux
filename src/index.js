import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {requestRobotsReducer, searchRobotsReducer} from "./reducer";
import {Provider} from "react-redux";
import {createLogger} from "redux-logger";
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const rootReducer = [searchRobotsReducer, requestRobotsReducer];
const store = createStore(combineReducers(rootReducer), applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();
