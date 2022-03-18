import "bulma/css/bulma.min.css";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
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
import { postLogin } from "../api/auth";

const Login = () => {
  const navigate = useNavigate();
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.length > 5);

  const loginHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return;
    }

    const user = {
      email: enteredEmail,
      password: enteredPassword,
    };

    postLogin(user);

    navigate("../home");

    resetEmailInput();
    resetPasswordInput();
  };
  return (
    <Box className="login">
      <Field>
        <Label size="small">Email</Label>
        <Control className="has-icons-left">
          <Input
            name="email"
            type="text"
            size="small"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </Control>
        {emailInputHasError && (
          <p className="help is-danger">Please enter a valid Email!</p>
        )}
      </Field>
      <Field>
        <Label size="small">Password</Label>
        <Control className="has-icons-left">
          <Input
            name="password"
            type="password"
            size="small"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faLock} />
          </span>
        </Control>
        {passwordInputHasError && (
          <p className="help is-danger">
            Password must have minimum 6 characters!
          </p>
        )}
      </Field>

      <Field>
        Not Registered Yet? Click <a href="/register">Here</a>
      </Field>

      <Field>
        <Control>
          <Button className="button is-primary" onClick={loginHandler}>
            Login
          </Button>
        </Control>
      </Field>
    </Box>
  );
};

export default Login;
