import "bulma/css/bulma.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import {
  Control,
  Field,
  Input,
  Label,
  Box,
  Button,
} from "react-bulma-companion";
import "../styles/Login.scss";

const Login = () => {
  return (
    <Box className="login">
      <Field>
        <Label size="small">Email</Label>
        <Control className="has-icons-left">
          <Input type="text" size="small" />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </Control>
      </Field>
      <Field>
        <Label size="small">Password</Label>
        <Control className="has-icons-left">
          <Input type="password" size="small" />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faLock} />
          </span>
        </Control>
      </Field>

      <Field>Not Registered Yet? Click Here</Field>

      <Field>
        <Control>
          <Button className="button is-primary">Login</Button>
        </Control>
      </Field>
    </Box>
  );
};

export default Login;
