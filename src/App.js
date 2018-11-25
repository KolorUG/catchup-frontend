import React, { Component } from 'react';
import { ProtectedRoute } from "./common/ProtectedRoute";
import GlobalStyle from './common/GlobalStyle'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import backgroundImageMobile from './assets/background-mobile.png'
import backgroundImageDesktop from './assets/background-desktop.png'
import { ThemeProvider } from 'styled-components'
import { themes } from "./common/themes";

import LoginView from './login-view/LoginView'
import MainView from './main-view/MainView'
import ProfileView from './profile-view/ProfileView'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }
  }

  componentDidMount() {
    window.onresize = () => this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    })
  }

  render() {
    return (
      <Router>
        <ThemeProvider theme={themes.main}>
          <React.Fragment>
            <GlobalStyle backgroundImage={this.state.windowWidth > 375 ? backgroundImageDesktop : backgroundImageMobile}/>
            <ProtectedRoute path="/index" component={MainView}/>
            <Route exact path="/" component={LoginView}/>
            <ProtectedRoute path="/profile" component={ProfileView}/>
          </React.Fragment>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
