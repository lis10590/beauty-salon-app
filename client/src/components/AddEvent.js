import Modal from "react-modal";
import { useState } from "react";
import Datetime from "react-datetime";

const AddEvent = (props) => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const startChangeHandler = (date) => {
    setStart(date);
  };

  const endChangeHandler = (date) => {
    setEnd(date);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onEventAdded({
      title,
      start,
      end,
    });

    props.onClose();
  };
  return (
    <Modal isOpen={props.isOpen} onRequestClose={props.onClose}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={titleChangeHandler}
        ></input>
        <div>
          <label>Start Date</label>
          <Datetime value={start} onChange={startChangeHandler} />
        </div>
        <div>
          <label>End Date</label>
          <Datetime value={end} onChange={endChangeHandler} />
        </div>

        <button>Add Event</button>
      </form>
    </Modal>
  );
};

export default AddEvent;
