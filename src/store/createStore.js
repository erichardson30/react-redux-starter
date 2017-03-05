import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { routerReducer } from 'react-router-redux';

const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    }),
    applyMiddleware(thunk)
)

export default store;