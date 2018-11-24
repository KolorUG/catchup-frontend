import React, { Component } from 'react';
import { ProtectedRoute } from "./common/ProtectedRoute";
import GlobalStyle from './common/GlobalStyle'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import backgroundImage from './assets/background.png'
import { ThemeProvider } from 'styled-components'
import { themes } from "./common/themes";

import LoginView from './login-view/LoginView'
import MainView from './main-view/MainView'

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
            <GlobalStyle backgroundImage={backgroundImage}/>
            <ProtectedRoute path="/index" component={MainView}/>
            <Route path="/login" component={LoginView}/>
          </React.Fragment>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
