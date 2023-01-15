import { useDispatch } from "react-redux";
import { treatmentAddition } from "../../store/treatments";
import InputComponent from "../UI/InputComponent";
import useInput from "../../hooks/useInput";
import styles from "../../styles/mystyles.scss";
import { Modal, Button, Delete } from "react-bulma-companion";

const AddTreatment = (props) => {
  let treatmentRegex = new RegExp("[A-Za-z]{2,}");
  let priceRegex = new RegExp("[0-9]");

  const {
    value: treatmentName,
    hasError: treatmentNameInputHasError,
    valueChangeHandler: treatmentNameChangeHandler,
    inputBlurHandler: treatmentNameBlurHandler,
    reset: resetTreatmentName,
  } = useInput((value) => treatmentRegex.test(value));

  const {
    value: price,
    hasError: priceInputHasError,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    reset: resetPrice,
  } = useInput((value) => priceRegex.test(value));

  const dispatch = useDispatch();

  const addNewTreatmentHandler = (event) => {
    event.preventDefault();
    if (!treatmentNameInputHasError && !priceInputHasError) {
      const treatment = {
        treatmentName,
        price,
      };
      dispatch(treatmentAddition(treatment));
      props.onClose();
      resetTreatmentName();
      resetPrice();
    }
  };
  return (
    <Modal active={props.isOpen}>
      <Modal.Background>
        <Modal.Card className="mt-6">
          <Modal.CardHead
            style={{ backgroundColor: "#FFB9B9" }}
            className="modal-card-head"
          >
            <Modal.CardTitle>Add Treatment</Modal.CardTitle>
            <Delete className="delete" onClick={props.onClose}></Delete>
          </Modal.CardHead>
          <Modal.CardBody>
            <InputComponent
              labelSize="small"
              labelContent="Treatment Name"
              inputName="treatmentName"
              inputType="text"
              inputSize="small"
              inputOnChange={treatmentNameChangeHandler}
              inputOnBlur={treatmentNameBlurHandler}
              inputValue={treatmentName}
            />
            {treatmentNameInputHasError && (
              <p className="help is-danger">Treatment Name is invalid!</p>
            )}
            <InputComponent
              labelSize="small"
              labelContent="Price (ILS)"
              inputName="price"
              inputType="text"
              inputSize="small"
              inputOnChange={priceChangeHandler}
              inputOnBlur={priceBlurHandler}
              inputValue={price}
            />
            {priceInputHasError && (
              <p className="help is-danger">Price is invalid!</p>
            )}
            <Button
              disabled={
                treatmentNameInputHasError || priceInputHasError ? true : false
              }
              className="button is-danger is-small mt-3"
              onClick={addNewTreatmentHandler}
            >
              Save
            </Button>
          </Modal.CardBody>
        </Modal.Card>
      </Modal.Background>
    </Modal>
  );
};

export default AddTreatment;
