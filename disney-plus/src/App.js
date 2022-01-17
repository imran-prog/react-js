import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Styles
import './App.css';
// Components
import Login from './components/Login';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
