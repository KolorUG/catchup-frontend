import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import { themes } from './common/themes'
import GlobalStyle from './common/GlobalStyle'

class App extends Component {
  render() {
    return (
      <>
      <GlobalStyle/>
      <ThemeProvider theme={themes.grayscale}>
      </ThemeProvider>
      </>
    );
  }
}

export default App;
