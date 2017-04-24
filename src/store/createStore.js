import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import reducers from '../reducers';

export const history = createHistory();
const routerMiddle = routerMiddleware(history);

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

let middleware = [routerMiddle, thunk]
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const store = createStore(reducers, enhancer);

export default store;