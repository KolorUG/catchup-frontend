import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom'
import auth from './auth.js'


const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

export { ProtectedRoute };

