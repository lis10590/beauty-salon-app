import { useDispatch } from "react-redux";
import { eventAddition } from "../store/events";
import { clientAddition } from "../store/clients";
import { treatmentHistoryAddition } from "../store/treatmentHistory";
import { useState } from "react";
import InputComponent from "./InputComponent";
import { Button, Modal, Delete } from "react-bulma-companion";
import DatePicker from "react-datepicker";
import styles from "../styles/mystyles.scss";

const AddEvent = (props) => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    fullName: "",
    phoneNumber: "",
    start: "",
    end: "",
  });

  const dispatch = useDispatch();
  const onChangeEventHandler = (event) => {
    const { name, value } = event.target;
    setNewEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onAddEvent = (event) => {
    event.preventDefault();
    if (
      newEvent.title &&
      newEvent.start &&
      newEvent.end &&
      newEvent.fullName &&
      newEvent.phoneNumber
    ) {
      dispatch(eventAddition(newEvent));
      dispatch(clientAddition(newEvent));
      dispatch(treatmentHistoryAddition(newEvent));
    }

    props.onClose();
    setNewEvent({
      title: "",
      fullName: "",
      phoneNumber: "",
      start: "",
      end: "",
    });
  };
  return (
    <Modal active={props.isOpen}>
      <Modal.Background>
        <Modal.Card className="modal-card-body-calendar mt-6">
          <Modal.CardHead className="modal-card-header">
            <Modal.CardTitle>Add Appointment</Modal.CardTitle>
            <Delete className="delete" onClick={props.onClose}></Delete>
          </Modal.CardHead>
          <Modal.CardBody>
            <InputComponent
              labelSize="small"
              labelContent="Treatment Details"
              inputName="title"
              inputType="text"
              inputSize="small"
              inputOnChange={onChangeEventHandler}
              inputValue={newEvent.title}
            />
            <InputComponent
              labelSize="small"
              labelContent="Client Name"
              inputName="fullName"
              inputType="text"
              inputSize="small"
              inputOnChange={onChangeEventHandler}
              inputValue={newEvent.fullName}
            />
            <InputComponent
              labelSize="small"
              labelContent="Phone Number"
              inputName="phoneNumber"
              inputType="tel"
              inputSize="small"
              inputOnChange={onChangeEventHandler}
              inputValue={newEvent.phoneNumber}
            />

            <DatePicker
              placeholderText="Start Date"
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
              showTimeSelect
            />
            <DatePicker
              placeholderText="End Date"
              selected={newEvent.end}
              onChange={(end) => setNewEvent({ ...newEvent, end })}
              showTimeSelect
            />
            <Button
              disabled={
                !newEvent.title ||
                !newEvent.start ||
                !newEvent.end ||
                !newEvent.fullName ||
                !newEvent.phoneNumber
                  ? true
                  : false
              }
              className="button is-danger is-small mt-3"
              onClick={onAddEvent}
            >
              Save
            </Button>
          </Modal.CardBody>
        </Modal.Card>
      </Modal.Background>
    </Modal>
  );
};

export default AddEvent;
