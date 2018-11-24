import React, { Component } from 'react';
import { ProtectedRoute } from "./common/ProtectedRoute";
import GlobalStyle from './common/GlobalStyle'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import backgroundImage from './assets/background.png'

import LoginView from './login-view/LoginView'
import MainView from './main-view/MainView'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <GlobalStyle backgroundImage={backgroundImage}/>
          <ProtectedRoute path="/index" component={MainView}/>
          <Route path="/login" component={LoginView} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
