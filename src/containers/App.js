import React, { Component } from 'react';
import { Link } from 'react-router';

import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><Link to="/">Welcome to React</Link></h2>
          <div className="app-nav">
            <nav>
              <Link to='about'>About</Link>
              <Link to='login'>Login</Link>
              <Link to='protected'>Protected</Link>
            </nav>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
