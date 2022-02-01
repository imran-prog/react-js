import "./App.css";
import { Routes, Route } from "react-router-dom";
// Components
import Home from "./components/Home";
import Shop from "./components/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
