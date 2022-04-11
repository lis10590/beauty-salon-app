import { useSelector, useDispatch } from "react-redux";
import { selectAllProducts, getAllProducts } from "../store/products";
import DropdownMenu from "./DropdownMenu";
import styles from "../styles/mystyles.scss";
import { Modal, Button, Delete, Dropdown } from "react-bulma-companion";
import { useState } from "react";
import { Link } from "react-router-dom";

const DeleteClient = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const [menuOpen, setMenuOpen] = useState(false);
  const [title, setTitle] = useState("Products");

  const menuHandler = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  const titleHandler = (event) => {
    setTitle(event.target.innerHTML);
    setMenuOpen(false);
  };
  return (
    <Modal active={props.isOpen}>
      <Modal.Background>
        <Modal.Card className="mt-6">
          <Modal.CardHead className="modal-card-head">
            <Modal.CardTitle>Delete Client</Modal.CardTitle>
            <Delete className="delete" onClick={props.onClose}></Delete>
          </Modal.CardHead>
          <Modal.CardBody className="modal-card-body">
            <DropdownMenu active={menuOpen} onClick={menuHandler} title={title}>
              {clients.map((client) => {
                return (
                  <Dropdown.Item
                    key={client.id}
                    onClick={titleHandler}
                    component="a"
                  >
                    {client.fullName}
                  </Dropdown.Item>
                );
              })}
            </DropdownMenu>

            <Button className="button is-danger is-small mt-1 ml-3">
              Delete
            </Button>
          </Modal.CardBody>
        </Modal.Card>
      </Modal.Background>
    </Modal>
  );
};

export default DeleteClient;
