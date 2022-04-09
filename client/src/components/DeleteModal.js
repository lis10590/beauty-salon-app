import { Modal, Button, Title, Delete } from "react-bulma-companion";
const DeleteModal = (props) => {
  return (
    <Modal active={props.isOpen}>
      <Modal.Background>
        <Modal.Card className="mt-6">
          <Modal.CardHead className="modal-card-header">
            <Modal.CardTitle>Delete</Modal.CardTitle>
            <Delete className="delete" onClick={props.onClose}></Delete>
          </Modal.CardHead>
          <Modal.CardBody>
            <Title size="6">Are you sure you want to delete?</Title>

            <Button className="button is-danger is-small mt-3">Yes</Button>
            <Button className="button is-danger is-small mt-3">No</Button>
          </Modal.CardBody>
        </Modal.Card>
      </Modal.Background>
    </Modal>
  );
};

export default DeleteModal;
