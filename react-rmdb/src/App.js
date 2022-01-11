import React from 'react';

// Styles
import { GlobalStyle } from './GlobalStyle';

// Components
import Header from './components/Header';
import Home from './components/Home'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <GlobalStyle />
       </div>
    )
  }
}

export default App;
