import "bulma/css/bulma.min.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Navbar } from "react-bulma-companion";
import { Link } from "react-router-dom";
import logo from "../assets/nail-logo.png";
import { logout, reset } from "../store/auth";

const NavbarComp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <Navbar>
      <Navbar.Brand>
        <img className="img-logo" src={logo}></img>
        {user && (
          <>
            {" "}
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
          </>
        )}
      </Navbar.Brand>

      <Navbar.End>
        {user ? (
          <Navbar.Item onClick={onLogout} to={onLogout} component={Link}>
            Logout
          </Navbar.Item>
        ) : (
          <>
            <Navbar.Item to="/register" component={Link}>
              Register
            </Navbar.Item>

            <Navbar.Item to="/login" component={Link}>
              Login
            </Navbar.Item>
          </>
        )}
      </Navbar.End>
    </Navbar>
  );
};

export default NavbarComp;
