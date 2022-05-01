import { useState } from "react";
import { useDispatch } from "react-redux";
import { productAddition } from "../../store/products";
import InputComponent from "../UI/InputComponent";
import styles from "../../styles/mystyles.scss";
import { Modal, Button, Delete } from "react-bulma-companion";

const AddProduct = (props) => {
  const [product, setProduct] = useState({
    productName: "",
    manufacturer: "",
    productType: "",
    productGroup: "",
    price: "",
  });

  const onChangeProductHandler = (event) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const addNewProductHandler = (event) => {
    event.preventDefault();
    if (
      product.productName &&
      product.manufacturer &&
      product.productType &&
      product.productGroup &&
      product.price
    ) {
      dispatch(productAddition(product));

      props.onClose();
      setProduct({
        productName: "",
        manufacturer: "",
        productType: "",
        productGroup: "",
        price: "",
      });
    }
  };
  return (
    <Modal active={props.isOpen}>
      <Modal.Background>
        <Modal.Card className="mt-6">
          <Modal.CardHead className="modal-card-head">
            <Modal.CardTitle>Add Product</Modal.CardTitle>
            <Delete className="delete" onClick={props.onClose}></Delete>
          </Modal.CardHead>
          <Modal.CardBody>
            <InputComponent
              labelSize="small"
              labelContent="Product Name"
              inputName="productName"
              inputType="text"
              inputSize="small"
              inputOnChange={onChangeProductHandler}
              inputValue={product.productName}
            />
            <InputComponent
              labelSize="small"
              labelContent="Manufacturer"
              inputName="manufacturer"
              inputType="text"
              inputSize="small"
              inputOnChange={onChangeProductHandler}
              inputValue={product.manufacturer}
            />
            <InputComponent
              labelSize="small"
              labelContent="Product Type"
              inputName="productType"
              inputType="text"
              inputSize="small"
              inputOnChange={onChangeProductHandler}
              inputValue={product.productType}
            />

            <InputComponent
              labelSize="small"
              labelContent="Product Group"
              inputName="productGroup"
              inputType="text"
              inputSize="small"
              inputOnChange={onChangeProductHandler}
              inputValue={product.productGroup}
            />

            <InputComponent
              labelSize="small"
              labelContent="Price (ILS)"
              inputName="price"
              inputType="text"
              inputSize="small"
              inputOnChange={onChangeProductHandler}
              inputValue={product.price}
            />

            <Button
              disabled={
                !product.productName ||
                !product.manufacturer ||
                !product.productType ||
                !product.productGroup ||
                !product.price
                  ? true
                  : false
              }
              className="button is-danger is-small mt-3"
              onClick={addNewProductHandler}
            >
              Save
            </Button>
          </Modal.CardBody>
        </Modal.Card>
      </Modal.Background>
    </Modal>
  );
};

export default AddProduct;
