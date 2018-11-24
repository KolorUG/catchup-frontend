import React, { Component } from 'react';
import { ProtectedRoute } from "./common/ProtectedRoute";
import { ThemeProvider } from 'styled-components'
import { themes } from './common/themes'
import GlobalStyle from './common/GlobalStyle'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MediaQuery from 'react-responsive'
import backgroundImageMobile from './assets/mobile-bg.png'

import LoginView from './login-view/LoginView'
import MainView from './main-view/MainView'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <MediaQuery query="(max-device-width: 480px)">
            <GlobalStyle backgroundImage={backgroundImageMobile}/>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 481px)">
            <GlobalStyle/>
          </MediaQuery>
          <ThemeProvider theme={themes.grayscale}>
          </ThemeProvider>
          <ProtectedRoute path="/index" component={MainView}/>
          <Route path="/login" component={LoginView} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
