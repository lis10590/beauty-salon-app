import "bulma/css/bulma.min.css";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Control, Field, Label, Box, Button } from "react-bulma-companion";
import Input from "react-bulma-companion/lib/Input";
import "../styles/Register.scss";
import { postRegister } from "../api/auth";

const Register = (props) => {
  const {
    value: enteredFname,
    isValid: enteredFnameIsValid,
    hasError: fnameInputHasError,
    valueChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    reset: resetFnameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLname,
    isValid: enteredLnameIsValid,
    hasError: lnameInputHasError,
    valueChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    reset: resetLnameInput,
  } = useInput((value) => value.trim() !== "");

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

  const {
    value: enteredPassword2,
    isValid: enteredPassword2IsValid,
    hasError: password2InputHasError,
    valueChangeHandler: password2ChangeHandler,
    inputBlurHandler: password2BlurHandler,
    reset: resetPassword2Input,
  } = useInput((value) => value.length > 5);

  let matchingPassword = true;
  if (enteredPassword2 !== enteredPassword) {
    matchingPassword = false;
  }

  let formIsValid = false;

  if (
    enteredFnameIsValid &&
    enteredLnameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredPassword2IsValid &&
    matchingPassword
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !enteredFnameIsValid ||
      !enteredEmailIsValid ||
      !enteredPasswordIsValid ||
      !enteredPassword2IsValid ||
      !matchingPassword
    ) {
      return;
    }

    const user = {
      fname: enteredFname,
      lname: enteredLname,
      email: enteredEmail,
      password: enteredPassword,
    };

    postRegister(user);

    resetFnameInput();
    resetLnameInput();
    resetEmailInput();
    resetPasswordInput();
    resetPassword2Input();
  };
  return (
    <form>
      <Box className="register">
        <Field>
          <Label size="small">First Name</Label>
          <Control className="has-icons-left">
            <Input
              onChange={fnameChangeHandler}
              value={enteredFname}
              name="firstName"
              type="text"
              size="small"
              onBlur={fnameBlurHandler}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </Control>
          {fnameInputHasError && (
            <p className="help is-danger">First Name is required!</p>
          )}
        </Field>
        <Field>
          <Label size="small">Last Name</Label>
          <Control className="has-icons-left">
            <Input
              name="lastName"
              type="text"
              size="small"
              onChange={lnameChangeHandler}
              value={enteredLname}
              onBlur={lnameBlurHandler}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </Control>
          {lnameInputHasError && (
            <p className="help is-danger">Last Name is required!</p>
          )}
        </Field>
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
          <Label size="small">Confirm Password</Label>
          <Control className="has-icons-left">
            <Input
              name="conpass"
              type="password"
              size="small"
              onChange={password2ChangeHandler}
              onBlur={password2BlurHandler}
              value={enteredPassword2}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </Control>
          {password2InputHasError && (
            <p className="help is-danger">
              Password must have minimum 6 characters!
            </p>
          )}
          {!matchingPassword && !passwordInputHasError && (
            <p className="help is-danger">Password does not match!</p>
          )}
        </Field>

        <Field renderas={Link}>Already Registered? Click Here</Field>

        <Field>
          <Control>
            <Button
              className="button is-primary"
              onClick={formSubmissionHandler}
            >
              Register
            </Button>
          </Control>
        </Field>
      </Box>
    </form>
  );
};

export default Register;
