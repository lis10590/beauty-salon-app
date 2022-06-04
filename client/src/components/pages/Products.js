import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectAllProducts,
  getAllProducts,
  deleteOneProduct,
  reset,
} from "../../store/products";
import { modalActions } from "../../store/modal";
import AddProduct from "../Addition Modals/AddProduct";
import Card from "../UI/Card";
import TableHead from "../UI/TableHead";
import AddButton from "../UI/AddButton";
import DeleteButton from "../UI/DeleteButton";
import DeleteModal from "../DeleteModal";
import { Table, Panel } from "react-bulma-companion";

const Products = () => {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const addModal = useSelector((state) => state.modal.addModalOpen);
  const deleteModal = useSelector((state) => state.modal.deleteModalOpen);

  useEffect(() => {
    dispatch(getAllProducts());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const tableHeadings = [
    "Product Name",
    "Manufacturer",
    "Product Type",
    "Product Group",
    "Price (ILS)",
  ];

  const closeAddModalHandler = () => {
    dispatch(modalActions.addModalClose());
  };

  const openAddModalHandler = () => {
    dispatch(modalActions.addModalOpen());
  };

  const openDeleteModalHandler = () => {
    dispatch(modalActions.deleteModalOpen());
  };

  const closeDeleteModalHandler = () => {
    dispatch(modalActions.deleteModalClose());
  };

  return (
    <div>
      <Card>
        <Panel.Heading style={{ backgroundColor: "#ffc0d3" }}>
          Product List
          <AddButton onAddButton={openAddModalHandler} />
        </Panel.Heading>

        <Table>
          <TableHead>
            {tableHeadings.map((heading) => {
              return <Table.HeadCell key={heading}>{heading}</Table.HeadCell>;
            })}
          </TableHead>
          <Table.Body>
            {products.map((product) => {
              return (
                <Table.Row key={product._id}>
                  <Table.DataCell>{product.productName}</Table.DataCell>
                  <Table.DataCell>{product.manufacturer}</Table.DataCell>
                  <Table.DataCell>{product.productType}</Table.DataCell>
                  <Table.DataCell>{product.productGroup}</Table.DataCell>
                  <Table.DataCell>{product.price}</Table.DataCell>
                  <Table.DataCell>
                    <DeleteButton onDelete={openDeleteModalHandler} />
                    <DeleteModal
                      onYesClick={() => {
                        dispatch(deleteOneProduct(product._id));
                        dispatch(modalActions.deleteModalClose());
                      }}
                      onNoClick={closeDeleteModalHandler}
                      isOpen={deleteModal}
                      onClose={closeDeleteModalHandler}
                    />
                  </Table.DataCell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Card>
      <AddProduct isOpen={addModal} onClose={closeAddModalHandler} />
    </div>
  );
};

export default Products;
