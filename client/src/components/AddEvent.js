import { useDispatch } from "react-redux";
import { eventAddition } from "../store/events";
import { useState } from "react";
import InputComponent from "./InputComponent";
import { Button, Modal, Delete } from "react-bulma-companion";
import DatePicker from "react-datepicker";
import styles from "../styles/mystyles.scss";

const AddEvent = (props) => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  const dispatch = useDispatch();
  const onChangeTitleHandler = (event) => {
    setNewEvent((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const onAddEvent = (event) => {
    event.preventDefault();
    if (newEvent.title && newEvent.start && newEvent.end) {
      dispatch(eventAddition(newEvent));
    }

    props.onClose();
    setNewEvent({
      title: "",
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
              labelContent="Title"
              inputName="title"
              inputType="text"
              inputSize="small"
              inputOnChange={onChangeTitleHandler}
              inputValue={newEvent.title}
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
                !newEvent.title || !newEvent.start || !newEvent.end
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
