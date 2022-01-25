// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Styles
import "./App.css";
// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Reset from "./components/Reset"

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
    </Router>
  );
}

export default App;
