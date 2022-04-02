import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import InputComponent from "../InputComponent";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Control, Field, Box, Button } from "react-bulma-companion";
import "../../styles/Login.scss";
import { login } from "../../store/auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    dispatch(login(user));

    navigate("../home");

    resetEmailInput();
    resetPasswordInput();
  };
  return (
    <Box className="login">
      <Field>
        <InputComponent
          labelSize="small"
          labelContent="Email"
          controlClassName="has-icons-left"
          inputName="email"
          inputType="text"
          inputSize="small"
          inputOnChange={emailChangeHandler}
          inputOnBlur={emailBlurHandler}
          inputValue={enteredEmail}
          spanClassName="icon is-small is-left"
          icon={faEnvelope}
        />

        {emailInputHasError && (
          <p className="help is-danger">Please enter a valid Email!</p>
        )}
      </Field>
      <Field>
        <InputComponent
          labelSize="small"
          labelContent="Password"
          controlClassName="has-icons-left"
          inputName="password"
          inputType="password"
          inputSize="small"
          inputOnChange={passwordChangeHandler}
          inputOnBlur={passwordBlurHandler}
          inputValue={enteredPassword}
          spanClassName="icon is-small is-left"
          icon={faLock}
        />

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
