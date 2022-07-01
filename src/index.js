import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {createStore} from "redux";
import {searchRobotsReducer} from "./reducer";
import {Provider} from "react-redux";

const store = createStore(searchRobotsReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();
