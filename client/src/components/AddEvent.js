// import Modal from "react-modal";
import { useState } from "react";
import Datetime from "react-datetime";
import { Button, Modal } from "react-bulma-companion";

const AddEvent = (props) => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const startChangeHandler = (date) => {
    setStart(date.toDate());
  };

  const endChangeHandler = (date) => {
    setEnd(date.toDate());
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
    <Modal active={props.isOpen}>
      <Modal.Card>
        <Modal.CardHead>
          <Modal.CardTitle>Add Event</Modal.CardTitle>
          <Button
            className="delete"
            aria-label="close"
            onClick={props.onClose}
          ></Button>
        </Modal.CardHead>
        <Modal.CardBody>
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
        </Modal.CardBody>
      </Modal.Card>
    </Modal>

    // <Modal isOpen={props.isOpen} onRequestClose={props.onClose}>
    //   <form onSubmit={onSubmit}>
    //     <input
    //       placeholder="Title"
    //       value={title}
    //       onChange={titleChangeHandler}
    //     ></input>
    //     <div>
    //       <label>Start Date</label>
    //       <Datetime value={start} onChange={startChangeHandler} />
    //     </div>
    //     <div>
    //       <label>End Date</label>
    //       <Datetime value={end} onChange={endChangeHandler} />
    //     </div>

    //     <button>Add Event</button>
    //   </form>
    // </Modal>
  );
};

export default AddEvent;
