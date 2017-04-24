import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import About from './components/About';
import App from './containers/App';
import Login from './containers/Login';
import Protected from './components/Protected';

export const getRoutes = (store) => {
  const PrivateRoute = ({ component: Component, ...rest }) => {
    const state = store.getState();

    return (
      <Route {...rest} render={props => (
        state.login.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
        )
      )} />
    )
  }

    

  return (
    <div>
      <App />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  );
}