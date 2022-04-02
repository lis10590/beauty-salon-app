import { useState } from "react";
import { useDispatch } from "react-redux";
import { clientAddition } from "../store/clients";
import InputComponent from "./InputComponent";
import styles from "../styles/mystyles.scss";
import { Modal, Button, Delete } from "react-bulma-companion";
import { faUser, faMobilePhone } from "@fortawesome/free-solid-svg-icons";

const AddClient = (props) => {
  // const [fullName, setFullName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");

  const [client, setClient] = useState({
    fullName: "",
    phoneNumber: "",
  });

  const clientChangeHandler = (event) => {
    const { name, value } = event.target;
    setClient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const fullNameChangeHandler = (event) => {
  //   setFullName(event.target.value);
  // };

  // const phoneNumberChangeHandler = (event) => {
  //   setPhoneNumber(event.target.value);
  // };
  const dispatch = useDispatch();

  const addNewClientHandler = (event) => {
    event.preventDefault();
    if (client.fullName && client.phoneNumber) {
      dispatch(clientAddition(client));
      props.onClose();
      setClient({
        fullName: "",
        phoneNumber: "",
      });
    }
  };

  return (
    <Modal active={props.isOpen}>
      <Modal.Background>
        <Modal.Card className="mt-6">
          <Modal.CardHead>
            <Modal.CardTitle>Add Client</Modal.CardTitle>
            <Delete className="delete" onClick={props.onClose}></Delete>
          </Modal.CardHead>
          <Modal.CardBody>
            <InputComponent
              labelSize="small"
              labelContent="Full Name"
              controlClassName="has-icons-left"
              inputName="fullName"
              inputType="text"
              inputSize="small"
              inputOnChange={clientChangeHandler}
              inputValue={client.fullName}
              spanClassName="icon is-small is-left"
              icon={faUser}
            />
            <InputComponent
              labelSize="small"
              labelContent="Phone Number"
              controlClassName="has-icons-left"
              inputName="phoneNumber"
              inputType="tel"
              inputSize="small"
              inputOnChange={clientChangeHandler}
              inputValue={client.phoneNumber}
              spanClassName="icon is-small is-left"
              icon={faMobilePhone}
            />

            <Button
              disabled={!client.fullName || !client.phoneNumber ? true : false}
              className="button is-danger is-small mt-3"
              onClick={addNewClientHandler}
            >
              Save
            </Button>
          </Modal.CardBody>
        </Modal.Card>
      </Modal.Background>
    </Modal>
  );
};

export default AddClient;
