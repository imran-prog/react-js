import "./App.css";
import { Routes, Route } from "react-router-dom";
// Components
import Home from "./components/Home";

// Temporary Function
const Hats = () => <div>Hats Page</div>;

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/hats" element={<Hats />} />
    </Routes>
  );
}

export default App;
