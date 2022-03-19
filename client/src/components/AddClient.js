import { useState } from "react";
import { Input, Modal, Label, Button } from "react-bulma-companion";

const AddClient = (props) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Modal active={props.isOpen}>
      <Modal.Card>
        <Modal.CardHead>
          <Modal.CardTitle>Add Client</Modal.CardTitle>
          <Button
            className="delete"
            aria-label="close"
            onClick={props.onClose}
          ></Button>
        </Modal.CardHead>
        <Modal.CardBody>
          <Label>Full Name</Label>
          <Input name="fullName" type="text" size="small"></Input>
        </Modal.CardBody>
      </Modal.Card>
    </Modal>
  );
};

export default AddClient;
