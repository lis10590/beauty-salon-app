import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import MyAccount from "./components/pages/MyAccount";
import NavbarComp from "./components/NavbarComp";
import Welcome from "./components/pages/Welcome";
import Clients from "./components/pages/Clients";
import Products from "./components/pages/Products";
import Treatments from "./components/pages/Treatments";
import "bulma/css/bulma.min.css";
import "react-datetime/css/react-datetime.css";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="clients" element={<Clients />} />
        <Route path="myaccount" element={<MyAccount />} />
        <Route path="products" element={<Products />} />
        <Route path="treatments" element={<Treatments />} />
      </Routes>
    </div>
  );
}

export default App;
