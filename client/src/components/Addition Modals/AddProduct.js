import { useDispatch } from "react-redux";
import { productAddition } from "../../store/products";
import InputComponent from "../UI/InputComponent";
import useInput from "../../hooks/useInput";
import styles from "../../styles/mystyles.scss";
import { Modal, Button, Delete } from "react-bulma-companion";

const AddProduct = (props) => {
  let inputRegex = new RegExp("[A-Za-z]{2,}");
  let priceRegex = new RegExp("[0-9]");

  const {
    value: productName,
    hasError: productNameInputHasError,
    valueChangeHandler: productNameChangeHandler,
    inputBlurHandler: productNameBlurHandler,
    reset: resetProductName,
  } = useInput((value) => inputRegex.test(value));

  const {
    value: manufacturer,
    hasError: manufacturerInputHasError,
    valueChangeHandler: manufacturerChangeHandler,
    inputBlurHandler: manufacturerBlurHandler,
    reset: resetManufacturer,
  } = useInput((value) => inputRegex.test(value));
  const {
    value: productGroup,
    hasError: productGroupInputHasError,
    valueChangeHandler: productGroupChangeHandler,
    inputBlurHandler: productGroupBlurHandler,
    reset: resetProductGroup,
  } = useInput((value) => inputRegex.test(value));

  const {
    value: productType,
    hasError: productTypeInputHasError,
    valueChangeHandler: productTypeChangeHandler,
    inputBlurHandler: productTypeBlurHandler,
    reset: resetProductType,
  } = useInput((value) => inputRegex.test(value));

  const {
    value: price,
    hasError: priceInputHasError,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    reset: resetPrice,
  } = useInput((value) => priceRegex.test(value));

  const dispatch = useDispatch();

  const addNewProductHandler = (event) => {
    event.preventDefault();
    if (
      !productNameInputHasError &&
      !manufacturerInputHasError &&
      !productTypeInputHasError &&
      !productGroupInputHasError &&
      !priceInputHasError
    ) {
      const product = {
        productName,
        manufacturer,
        productType,
        productGroup,
        price,
      };
      dispatch(productAddition(product));

      props.onClose();
      resetProductName();
      resetManufacturer();
      resetProductType();
      resetProductGroup();
      resetPrice();
    }
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
            <InputComponent
              labelSize="small"
              labelContent="Product Name"
              inputName="productName"
              inputType="text"
              inputSize="small"
              inputOnChange={productNameChangeHandler}
              inputOnBlur={productNameBlurHandler}
              inputValue={productName}
            />
            {productNameInputHasError && (
              <p className="help is-danger">Product Name is invalid!</p>
            )}
            <InputComponent
              labelSize="small"
              labelContent="Manufacturer"
              inputName="manufacturer"
              inputType="text"
              inputSize="small"
              inputOnChange={manufacturerChangeHandler}
              inputOnBlur={manufacturerBlurHandler}
              inputValue={manufacturer}
            />
            {manufacturerInputHasError && (
              <p className="help is-danger">Manufacturer is invalid!</p>
            )}
            <InputComponent
              labelSize="small"
              labelContent="Product Type"
              inputName="productType"
              inputType="text"
              inputSize="small"
              inputOnChange={productTypeChangeHandler}
              inputOnBlur={productTypeBlurHandler}
              inputValue={productType}
            />
            {productTypeInputHasError && (
              <p className="help is-danger">Product Type is invalid!</p>
            )}

            <InputComponent
              labelSize="small"
              labelContent="Product Group"
              inputName="productGroup"
              inputType="text"
              inputSize="small"
              inputOnChange={productGroupChangeHandler}
              inputOnBlur={productGroupBlurHandler}
              inputValue={productGroup}
            />
            {productGroupInputHasError && (
              <p className="help is-danger">Product Group is invalid!</p>
            )}
            <InputComponent
              labelSize="small"
              labelContent="Price (ILS)"
              inputName="price"
              inputType="text"
              inputSize="small"
              inputOnChange={priceChangeHandler}
              inputOnBlur={priceBlurHandler}
              inputValue={price}
            />
            {priceInputHasError && (
              <p className="help is-danger">Price is invalid!</p>
            )}
            <Button
              disabled={
                productNameInputHasError ||
                manufacturerInputHasError ||
                productTypeInputHasError ||
                productGroupInputHasError ||
                priceInputHasError
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
