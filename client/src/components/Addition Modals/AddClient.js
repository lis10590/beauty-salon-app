import { useDispatch } from "react-redux";
import { clientAddition } from "../../store/clients";
import InputComponent from "../UI/InputComponent";
import useInput from "../../hooks/useInput";
import styles from "../../styles/mystyles.scss";
import { Modal, Button, Delete } from "react-bulma-companion";
import { faUser, faMobilePhone } from "@fortawesome/free-solid-svg-icons";

const AddClient = (props) => {
  // const [client, setClient] = useState({
  //   fullName: "",
  //   phoneNumber: "",
  // });

  let fullNameRegex = new RegExp("[A-Za-z]+\\s[A-Za-z]{2,}");
  let phoneNumberRegex = new RegExp("^[0][5][0-9]{8}");

  const {
    value: fullName,
    hasError: fullNameInputHasError,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullName,
  } = useInput((value) => fullNameRegex.test(value));

  const {
    value: phoneNumber,
    hasError: phoneNumberInputHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumber,
  } = useInput((value) => phoneNumberRegex.test(value));

  const dispatch = useDispatch();

  const addNewClientHandler = (event) => {
    event.preventDefault();
    if (!fullNameInputHasError && !phoneNumberInputHasError) {
      const client = {
        fullName,
        phoneNumber,
      };
      dispatch(clientAddition(client));
      props.onClose();
      resetFullName();
      resetPhoneNumber();
    }
  };

  return (
    <Modal active={props.isOpen}>
      <Modal.Background>
        <Modal.Card className="mt-6">
          <Modal.CardHead style={{ backgroundColor: "#FFB9B9" }}>
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
              inputOnChange={fullNameChangeHandler}
              inputOnBlur={fullNameBlurHandler}
              inputValue={fullName}
              spanClassName="icon is-small is-left"
              icon={faUser}
            />
            {fullNameInputHasError && (
              <p className="help is-danger">Full Name is invalid!</p>
            )}
            <InputComponent
              labelSize="small"
              labelContent="Phone Number"
              controlClassName="has-icons-left"
              inputName="phoneNumber"
              inputType="tel"
              inputSize="small"
              inputOnChange={phoneNumberChangeHandler}
              inputOnBlur={phoneNumberBlurHandler}
              inputValue={phoneNumber}
              spanClassName="icon is-small is-left"
              icon={faMobilePhone}
            />
            {phoneNumberInputHasError && (
              <p className="help is-danger">phone Number is invalid!</p>
            )}

            <Button
              disabled={!fullName || !phoneNumber ? true : false}
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
