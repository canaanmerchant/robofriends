import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers';
import 'tachyons';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(

  <Provider store={store} >
    <App />
  </Provider> , document.getElementById('root'));
registerServiceWorker();
