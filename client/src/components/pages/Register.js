import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../InputComponent";
import useInput from "../../hooks/useInput";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Control, Field, Box, Button } from "react-bulma-companion";
import "../../styles/Register.scss";
import { register, reset } from "../../store/auth";
import { useState, useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const [hasError, setHasError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    password2: false,
  });
  const [isTouched, setIsTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    password2: false,
  });

  useEffect(() => {
    if (isError) {
      // toast.error(message);
      console.log(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChangeFormData = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    hasErrorHandler();
  };

  const onBlurInput = (event) => {
    const { name } = event.target;
    setIsTouched((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };

  const hasErrorHandler = () => {
    if (formData.firstName.trim() === "" && isTouched) {
      setHasError((prevState) => ({
        ...prevState,
        [formData.firstName]: true,
      }));
    }
    if (formData.lastName.trim() === "" && isTouched) {
      setHasError((prevState) => ({
        ...prevState,
        [formData.lastName]: true,
      }));
    }

    if (emailRegex.test(formData.email) === false && isTouched) {
      setHasError((prevState) => ({
        ...prevState,
        [formData.email]: true,
      }));
    }

    if (formData.password < 5 && isTouched) {
      setHasError((prevState) => ({
        ...prevState,
        [formData.password]: true,
      }));
    }

    if (formData.password2 < 5 && isTouched) {
      setHasError((prevState) => ({
        ...prevState,
        [formData.password2]: true,
      }));
    }
  };

  // const {
  //   value: enteredfirstName,
  //   isValid: enteredfirstNameIsValid,
  //   hasError: firstNameInputHasError,
  //   valueChangeHandler: firstNameChangeHandler,
  //   inputBlurHandler: firstNameBlurHandler,
  //   reset: resetfirstNameInput,
  // } = useInput((value) => value.trim() !== "");

  // const {
  //   value: enteredlastName,
  //   isValid: enteredlastNameIsValid,
  //   hasError: lastNameInputHasError,
  //   valueChangeHandler: lastNameChangeHandler,
  //   inputBlurHandler: lastNameBlurHandler,
  //   reset: resetlastNameInput,
  // } = useInput((value) => value.trim() !== "");

  // const {
  //   value: enteredEmail,
  //   isValid: enteredEmailIsValid,
  //   hasError: emailInputHasError,
  //   valueChangeHandler: emailChangeHandler,
  //   inputBlurHandler: emailBlurHandler,
  //   reset: resetEmailInput,
  // } = useInput((value) => value.includes("@"));

  // const {
  //   value: enteredPassword,
  //   isValid: enteredPasswordIsValid,
  //   hasError: passwordInputHasError,
  //   valueChangeHandler: passwordChangeHandler,
  //   inputBlurHandler: passwordBlurHandler,
  //   reset: resetPasswordInput,
  // } = useInput((value) => value.length > 5);

  // const {
  //   value: enteredPassword2,
  //   isValid: enteredPassword2IsValid,
  //   hasError: password2InputHasError,
  //   valueChangeHandler: password2ChangeHandler,
  //   inputBlurHandler: password2BlurHandler,
  //   reset: resetPassword2Input,
  // } = useInput((value) => value.length > 5);

  let matchingPassword = true;
  if (formData.password2 !== formData.password) {
    matchingPassword = false;
  }

  // let formIsValid = false;

  // if (
  //   enteredfirstNameIsValid &&
  //   enteredlastNameIsValid &&
  //   enteredEmailIsValid &&
  //   enteredPasswordIsValid &&
  //   enteredPassword2IsValid &&
  //   matchingPassword
  // ) {
  //   formIsValid = true;
  // }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      hasError.firstName ||
      hasError.lastName ||
      hasError.email ||
      hasError.password ||
      hasError.password2 ||
      !matchingPassword
    ) {
      return;
    }

    const user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };
    dispatch(register(user));

    // resetfirstNameInput();
    // resetlastNameInput();
    // resetEmailInput();
    // resetPasswordInput();
    // resetPassword2Input();
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
            inputOnChange={onChangeFormData}
            inputOnBlur={onBlurInput}
            inputValue={formData.firstName}
            spanClassName="icon is-small is-left"
            icon={faUser}
          />
          {hasError.firstName && (
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
            inputOnChange={onChangeFormData}
            inputOnBlur={onBlurInput}
            inputValue={formData.lastName}
            spanClassName="icon is-small is-left"
            icon={faUser}
          />
          {hasError.lastName && (
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
            inputOnChange={onChangeFormData}
            inputOnBlur={onBlurInput}
            inputValue={formData.email}
            spanClassName="icon is-small is-left"
            icon={faEnvelope}
          />
          {hasError.email && (
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
            inputOnChange={onChangeFormData}
            inputOnBlur={onBlurInput}
            inputValue={formData.password}
            spanClassName="icon is-small is-left"
            icon={faLock}
          />
          {hasError.password && (
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
            inputName="password2"
            inputType="password"
            inputSize="small"
            inputOnChange={onChangeFormData}
            inputOnBlur={onBlurInput}
            inputValue={formData.password2}
            spanClassName="icon is-small is-left"
            icon={faLock}
          />

          {hasError.password2 && (
            <p className="help is-danger">
              Password must have minimum 6 characters!
            </p>
          )}
          {!matchingPassword && !hasError.password && (
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
