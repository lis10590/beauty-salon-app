import "bulma/css/bulma.min.css";
import { Navbar } from "react-bulma-companion";
import { Link } from "react-router-dom";
import logo from "../assets/nail-logo.png";

const NavbarComp = () => {
  return (
    <Navbar>
      {/* <Navbar.Brand to="/" component={Link}>
        <img className="img-logo" src={logo}></img>
      </Navbar.Brand> */}
      <Navbar.Brand>
        <img className="img-logo" src={logo}></img>
        <Navbar.Item to="/home" component={Link}>
          Home
        </Navbar.Item>
        <Navbar.Item to="/myaccount" component={Link}>
          My Account
        </Navbar.Item>
        <Navbar.Item to="/clients" component={Link}>
          Clients
        </Navbar.Item>
        <Navbar.Item to="/products" component={Link}>
          Products
        </Navbar.Item>
        <Navbar.Item to="/treatments" component={Link}>
          Treatments
        </Navbar.Item>
      </Navbar.Brand>
      {/* <Navbar.Start>
        
      </Navbar.Start> */}

      <Navbar.End>
        <Navbar.Item to="/register" component={Link}>
          Register
        </Navbar.Item>

        <Navbar.Item to="/login" component={Link}>
          Login
        </Navbar.Item>
      </Navbar.End>
    </Navbar>
  );
};

export default NavbarComp;
