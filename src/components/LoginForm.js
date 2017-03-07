import React, { PropTypes } from 'react';

const LoginForm = ( { isLoggedIn, onLoginClick, onLogOutClick }) => (
  (!isLoggedIn ?
    <div>
      <label>Username</label>
      <input type='text' placeholder='Username' />
      <label>Password</label>
      <input type='password' placeholder='Password' />
      <button type='button' onClick={onLoginClick}>Log In</button>
    </div>
  :
    <div>
      <span>User is already logged in</span>
      <button type='button' onClick={onLogOutClick}>Log Out</button>
    </div>
  )
);

LoginForm.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  onLogOutClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

export default LoginForm;