import { useState } from "react";
import InputComponent from "./InputComponent";
import styles from "../styles/mystyles.scss";
import { Modal, Button, Delete } from "react-bulma-companion";

const ChangePassword = (props) => {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const onChangePaswwordHandler = (event) => {
    const { name, value } = event.target;
    setPassword((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
              inputOnChange={onChangePaswwordHandler}
              inputValue={password.oldPassword}
            />

            <InputComponent
              labelSize="small"
              labelContent="New Password"
              inputName="newPassword"
              inputType="password"
              inputSize="small"
              inputOnChange={onChangePaswwordHandler}
              inputValue={password.newPassword}
            />

            <InputComponent
              labelSize="small"
              labelContent="Confirm Password"
              inputName="confirmPassword"
              inputType="password"
              inputSize="small"
              inputOnChange={onChangePaswwordHandler}
              inputValue={password.confirmPassword}
            />

            <Button
              disabled={
                !password.oldPassword ||
                !password.newPassword ||
                !password.confirmPassword
                  ? true
                  : false
              }
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
