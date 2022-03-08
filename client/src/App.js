import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import Login from "./components/Login";
import Register from "./components/Register";
import "bulma/css/bulma.min.css";
import NavbarComp from "./components/NavbarComp";
import Welcome from "./components/pages/Welcome";

function App() {

  return (
    <div className="App">
    
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
