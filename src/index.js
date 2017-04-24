import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store, { history } from './store/createStore';
import { ConnectedRouter, push } from 'react-router-redux';

import { getRoutes } from './routes';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      { getRoutes(store) }
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
