import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectAllTreatments,
  getAllTreatments,
  deleteOneTreatment,
  reset,
} from "../../store/treatments";
import { modalActions } from "../../store/modal";
import AddTreatment from "../Addition Modals/AddTreatment";
import Card from "../UI/Card";
import AddButton from "../UI/AddButton";
import DeleteButton from "../UI/DeleteButton";
import DeleteModal from "../DeleteModal";
import TableHead from "../UI/TableHead";
import { Panel, Table } from "react-bulma-companion";

const Treatments = () => {
  const treatments = useSelector(selectAllTreatments);
  const dispatch = useDispatch();
  const addModal = useSelector((state) => state.modal.addModalOpen);
  const deleteModal = useSelector((state) => state.modal.deleteModalOpen);
  const tableHeadings = ["Treatment Name", "Price (ILS)"];

  useEffect(() => {
    dispatch(getAllTreatments());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);
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
        <Panel.Heading>
          Treatment List
          <AddButton onAddButton={openAddModalHandler} />
        </Panel.Heading>

        <Table>
          <TableHead>
            {tableHeadings.map((heading) => {
              return <Table.HeadCell key={heading}>{heading}</Table.HeadCell>;
            })}
          </TableHead>
          <Table.Body>
            {treatments.map((treatment) => {
              return (
                <Table.Row key={treatment._id}>
                  <Table.DataCell>{treatment.treatmentName}</Table.DataCell>
                  <Table.DataCell>{treatment.price}</Table.DataCell>

                  <Table.DataCell>
                    <DeleteButton onDelete={openDeleteModalHandler} />
                    <DeleteModal
                      onYesClick={() => {
                        dispatch(deleteOneTreatment(treatment._id));
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
      <AddTreatment isOpen={addModal} onClose={closeAddModalHandler} />
    </div>
  );
};

export default Treatments;
