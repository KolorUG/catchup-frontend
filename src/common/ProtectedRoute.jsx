import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom'

const auth = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 100)
  }
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

export { ProtectedRoute };

