import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../UI/InputComponent";
import useInput from "../../hooks/useInput";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Control, Field, Box, Button } from "react-bulma-companion";
import "../../styles/Register.scss";
import { register, reset } from "../../store/auth";
import { useEffect } from "react";

const Register = () => {
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
      console.log(message);
    }

    if (isSuccess || user) {
      navigate("/home");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  //inputs distructuring for validation using custom hook useInput
  const {
    value: enteredFirstName,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput((value) => value.trim() !== "");

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

  const {
    value: enteredPassword2,
    hasError: password2InputHasError,
    valueChangeHandler: password2ChangeHandler,
    inputBlurHandler: password2BlurHandler,
  } = useInput((value) => value.length > 5);

  let matchingPassword = true;
  if (enteredPassword2 !== enteredPassword) {
    matchingPassword = false;
  }

  //user registration function
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (
      firstNameInputHasError ||
      lastNameInputHasError ||
      emailInputHasError ||
      passwordInputHasError ||
      password2InputHasError ||
      !matchingPassword
    ) {
      return;
    }

    const user = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
    };
    dispatch(register(user));
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
            inputOnChange={firstNameChangeHandler}
            inputOnBlur={firstNameBlurHandler}
            inputValue={enteredFirstName}
            spanClassName="icon is-small is-left"
            icon={faUser}
          />
          {firstNameInputHasError && (
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
            inputOnChange={lastNameChangeHandler}
            inputOnBlur={lastNameBlurHandler}
            inputValue={enteredLastName}
            spanClassName="icon is-small is-left"
            icon={faUser}
          />
          {lastNameInputHasError && (
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
            <p className="help is-danger">Enter a valid email!</p>
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
              Password must be minimum 6 characters!
            </p>
          )}
        </Field>
        <Field>
          <InputComponent
            labelSize="small"
            labelContent="Confirm Password"
            controlClassName="has-icons-left"
            inputName="password2"
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
              Password must be minimum 6 characters!
            </p>
          )}
          {!matchingPassword && (
            <p className="help is-danger">Password does not match!</p>
          )}
        </Field>
        <Field component={Link} to="/login">
          Already Registered? Click Here
        </Field>
        <Field>
          <Control>
            <Button
              className="button is-danger mt-2"
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
