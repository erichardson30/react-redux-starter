import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getRoutes } from '../routes';

import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><Link to="/">Welcome to React</Link></h2>
          <div className="app-nav">
            <nav>
              <Link to='/about'>About</Link>
              <Link to='/login'>{( isLoggedIn ? 'Logout' : 'Login' )}</Link>
              <Link to='/protected'>Protected</Link>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn:  (state.login.loggedIn ? state.login.loggedIn : false) 
  }
}

App = connect (
  mapStateToProps
)(App)

export default App;
