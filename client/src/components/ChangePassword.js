import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputComponent from "./UI/InputComponent";
import useInput from "../hooks/useInput";
import styles from "../styles/mystyles.scss";
import { Modal, Button, Delete } from "react-bulma-companion";
import { updatePassword, selectUser } from "../store/user";
const ChangePassword = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  // const [passwordObject, setPasswordObject] = useState({
  //   oldPassword: "",
  //   newPassword: "",
  //   confirmPassword: "",
  // });

  const {
    value: oldPassword,
    isValid: oldPasswordIsValid,
    hasError: oldPasswordInputHasError,
    valueChangeHandler: oldPasswordChangeHandler,
    inputBlurHandler: oldPasswordBlurHandler,
  } = useInput((value) => value.length > 5);

  const {
    value: newPassword,
    isValid: newPasswordIsValid,
    hasError: newPasswordInputHasError,
    valueChangeHandler: newPasswordChangeHandler,
    inputBlurHandler: newPasswordBlurHandler,
  } = useInput((value) => value.length > 5);

  const {
    value: confirmPassword,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordInputHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
  } = useInput((value) => value.length > 5);

  // const onChangePaswwordHandler = (event) => {
  //   const { name, value } = event.target;
  //   setPasswordObject((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  let matchingPassword = true;
  if (newPassword !== confirmPassword) {
    matchingPassword = false;
  }

  const onSubmitHandler = () => {
    if (
      oldPasswordInputHasError ||
      newPasswordInputHasError ||
      confirmPasswordInputHasError
    ) {
      return;
    }
    const passwords = {
      oldPassword,
      newPassword,
      confirmPassword,
      email: user.email,
    };

    console.log(passwords);

    // dispatch(updatePassword(passwords));
  };

  return (
    <Modal active={props.isOpen}>
      <Modal.Background>
        <Modal.Card className="mt-6">
          <Modal.CardHead className="modal-card-head">
            <Modal.CardTitle>Change Password</Modal.CardTitle>
            <Delete className="delete" onClick={props.onClose}></Delete>
          </Modal.CardHead>
          <Modal.CardBody>
            <InputComponent
              labelSize="small"
              labelContent="Old Password"
              inputName="oldPassword"
              inputType="password"
              inputSize="small"
              inputOnChange={oldPasswordChangeHandler}
              inputOnBlur={oldPasswordBlurHandler}
              inputValue={oldPassword}
            />

            {oldPasswordInputHasError && (
              <p className="help is-danger">
                Password must be minimum 6 characters!
              </p>
            )}

            <InputComponent
              labelSize="small"
              labelContent="New Password"
              inputName="newPassword"
              inputType="password"
              inputSize="small"
              inputOnChange={newPasswordChangeHandler}
              inputOnBlur={newPasswordBlurHandler}
              inputValue={newPassword}
            />
            {newPasswordInputHasError && (
              <p className="help is-danger">
                Password must be minimum 6 characters!
              </p>
            )}

            <InputComponent
              labelSize="small"
              labelContent="Confirm Password"
              inputName="confirmPassword"
              inputType="password"
              inputSize="small"
              inputOnChange={confirmPasswordChangeHandler}
              inputOnBlur={confirmPasswordBlurHandler}
              inputValue={confirmPassword}
            />

            {confirmPasswordInputHasError && (
              <p className="help is-danger">
                Password must be minimum 6 characters!
              </p>
            )}

            {!matchingPassword && (
              <p className="help is-danger">Password does not match!</p>
            )}

            <Button
              disabled={
                !oldPassword || !newPassword || !confirmPassword ? true : false
              }
              onClick={onSubmitHandler}
              className="button is-danger is-small mt-3"
            >
              Change Password
            </Button>
          </Modal.CardBody>
        </Modal.Card>
      </Modal.Background>
    </Modal>
  );
};

export default ChangePassword;
