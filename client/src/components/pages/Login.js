import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import InputComponent from "../UI/InputComponent";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Control, Field, Box, Button } from "react-bulma-companion";
import "../../styles/Login.scss";
import { login, reset } from "../../store/auth";
import { toast } from "react-toastify";

const Login = () => {
  //definition of useNavigate and useDispatch hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //distructuring of states from redux store
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  //email validation
  let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/home");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  //inputs distructuring for validation using custom hook useInput
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => emailRegex.test(value));

  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.length > 5);

  //function activates by pressing on login button
  const loginHandler = (event) => {
    event.preventDefault();

    if (emailInputHasError || passwordInputHasError) {
      return;
    }

    const user = {
      email: enteredEmail,
      password: enteredPassword,
    };
    dispatch(login(user));
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

      <Field component={Link} to="/register">
        Not Registered Yet? Click Here
      </Field>

      <Field>
        <Control>
          <Button className="button is-danger mt-2" onClick={loginHandler}>
            Login
          </Button>
        </Control>
      </Field>
    </Box>
  );
};

export default Login;
