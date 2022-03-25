import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../InputComponent";
import useInput from "../../hooks/useInput";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Control, Field, Box, Button } from "react-bulma-companion";
import "../../styles/Register.scss";
import { postRegister } from "../../api/auth";

const Register = () => {
  const navigate = useNavigate();
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
          <InputComponent
            labelSize="small"
            labelContent="First Name"
            controlClassName="has-icons-left"
            inputName="firstName"
            inputType="text"
            inputSize="small"
            inputOnChange={fnameChangeHandler}
            inputOnBlur={fnameBlurHandler}
            inputValue={enteredFname}
            spanClassName="icon is-small is-left"
            icon={faUser}
          />
          {fnameInputHasError && (
            <p className="help is-danger">First Name is required!</p>
          )}
        </Field>
        <Field>
          <InputComponent
            labelSize="small"
            labelContent="Last Name"
            controlClassName="has-icons-left"
            inputName="lastName"
            inputType="text"
            inputSize="small"
            inputOnChange={lnameChangeHandler}
            inputOnBlur={lnameBlurHandler}
            inputValue={enteredLname}
            spanClassName="icon is-small is-left"
            icon={faUser}
          />
          {lnameInputHasError && (
            <p className="help is-danger">Last Name is required!</p>
          )}
        </Field>
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
          <InputComponent
            labelSize="small"
            labelContent="Confirm Password"
            controlClassName="has-icons-left"
            inputName="confirmPassword"
            inputType="password"
            inputSize="small"
            inputOnChange={password2ChangeHandler}
            inputOnBlur={password2BlurHandler}
            inputValue={enteredPassword2}
            spanClassName="icon is-small is-left"
            icon={faLock}
          />

          {password2InputHasError && (
            <p className="help is-danger">
              Password must have minimum 6 characters!
            </p>
          )}
          {!matchingPassword && !passwordInputHasError && (
            <p className="help is-danger">Password does not match!</p>
          )}
        </Field>
        <Field>
          Already Registered? Click <a href={() => navigate("/login")}>Here</a>
        </Field>
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
