import "./App.css";
import { Routes, Route } from "react-router-dom";
// Components
import Home from "./components/Home";
import Shop from "./components/Shop";
import Header from "./components/header";
import Signin from "./components/Signin";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
