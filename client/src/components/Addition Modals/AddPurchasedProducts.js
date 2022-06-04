import DropdownMenu from "../UI/DropdownMenu";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, selectAllProducts, reset } from "../../store/products";
import { purchasedProductsUpdate } from "../../store/clients";
import styles from "../../styles/mystyles.scss";
import { Modal, Button, Delete, Dropdown } from "react-bulma-companion";

const AddPurchasedProducts = (props) => {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Products");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    dispatch(getAllProducts());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const menuHandler = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  const titleHandler = (event) => {
    setTitle(event.target.innerHTML);
    setSelectedProduct(event.target.innerHTML);
    setMenuOpen(false);
  };

  const onSubmitProduct = () => {
    console.log(props.client);
    const object = {
      phoneNumber: props.client,
      productPurchased: selectedProduct,
    };

    dispatch(purchasedProductsUpdate(object));

    props.onClose();
  };

  return (
    <Modal active={props.isOpen}>
      <Modal.Background>
        <Modal.Card className="mt-6">
          <Modal.CardHead
            style={{ backgroundColor: "#ffc0d3" }}
            className="modal-card-head"
          >
            <Modal.CardTitle>Add Product</Modal.CardTitle>
            <Delete className="delete" onClick={props.onClose}></Delete>
          </Modal.CardHead>
          <Modal.CardBody>
            <DropdownMenu active={menuOpen} onClick={menuHandler} title={title}>
              {products.map((product) => {
                return (
                  <Dropdown.Item
                    key={product._id}
                    onClick={titleHandler}
                    component="a"
                  >
                    {product.productName}
                  </Dropdown.Item>
                );
              })}
            </DropdownMenu>
            <p>
              <Button
                onClick={onSubmitProduct}
                className="button is-danger is-small mt-3"
              >
                Add
              </Button>
            </p>
          </Modal.CardBody>
        </Modal.Card>
      </Modal.Background>
    </Modal>
  );
};

export default AddPurchasedProducts;
