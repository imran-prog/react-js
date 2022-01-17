import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Styles
import './App.css';
// Components
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
