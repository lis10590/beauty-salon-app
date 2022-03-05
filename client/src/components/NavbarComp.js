import "bulma/css/bulma.min.css";
import { Navbar } from "react-bulma-companion";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <Navbar>
      {/* <Navbar.Item>Home</Navbar.Item> */}
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
