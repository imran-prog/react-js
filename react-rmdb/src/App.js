import React from 'react';

// Styles
import { GlobalStyle } from './GlobalStyle';

// Components
import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        Start here.
        <GlobalStyle />
       </div>
    )
  }
}

export default App;
