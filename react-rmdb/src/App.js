import React from 'react';

// Styles
import { GlobalStyle } from './GlobalStyle';

// function App() {
//   return (
//     <div className="App">
//       Start here.
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        Start here.
        <GlobalStyle />
       </div>
    )
  }
}

export default App;
