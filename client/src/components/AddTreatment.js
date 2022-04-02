import { useState } from "react";
import { useDispatch } from "react-redux";
import { treatmentAddition } from "../store/treatments";
import InputComponent from "./InputComponent";
import styles from "../styles/mystyles.scss";
import { Modal, Button, Delete } from "react-bulma-companion";

const AddTreatment = (props) => {
  const [treatment, setTreatment] = useState({
    treatmentName: "",
    price: "",
  });

  const onChangeTreatmentHandler = (event) => {
    const { name, value } = event.target;
    setTreatment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const addNewTreatmentHandler = (event) => {
    event.preventDefault();
    if (treatment.treatmentName && treatment.price) {
      dispatch(treatmentAddition(treatment));
      props.onClose();
      setTreatment({
        treatmentName: "",
        price: "",
      });
    }
  };
  return (
    <Modal active={props.isOpen}>
      <Modal.Background>
        <Modal.Card className="mt-6">
          <Modal.CardHead className="modal-card-head">
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
              inputOnChange={onChangeTreatmentHandler}
              inputValue={treatment.productName}
            />

            <InputComponent
              labelSize="small"
              labelContent="Price (ILS)"
              inputName="price"
              inputType="text"
              inputSize="small"
              inputOnChange={onChangeTreatmentHandler}
              inputValue={treatment.price}
            />

            <Button
              disabled={
                !treatment.treatmentName || !treatment.price ? true : false
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
