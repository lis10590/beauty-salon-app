import "bulma/css/bulma.min.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navbar } from "react-bulma-companion";
import { Link } from "react-router-dom";
import { logout, reset } from "../../store/auth";
import mystyles from "../../styles/mystyles.scss";

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
    <Navbar className="mb-6" id="app-navbar">
      <Navbar.Brand>
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
          <Navbar.Item onClick={onLogout} to="/" component={Link}>
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
