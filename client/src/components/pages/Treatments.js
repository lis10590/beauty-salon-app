import { useSelector, useDispatch } from "react-redux";
import { selectAllTreatments } from "../../store/treatments";
import { modalActions } from "../../store/modal";
import AddTreatment from "../AddTreatment";
import Card from "../Card";
import AddAndDelete from "../AddAndDelete";
import DeleteButton from "../DeleteButton";
import TableHead from "../TableHead";
import { Panel, Table } from "react-bulma-companion";

const Treatments = () => {
  const treatments = useSelector(selectAllTreatments);
  const dispatch = useDispatch();
  const addModal = useSelector((state) => state.modal.addModalOpen);
  const tableHeadings = ["Treatment Name", "Price (ILS)"];
  const closeAddModalHandler = () => {
    dispatch(modalActions.addModalClose());
  };

  const openAddModalHandler = () => {
    dispatch(modalActions.addModalOpen());
  };
  return (
    <div>
      <Card>
        <Panel.Heading>
          Treatment List
          <AddAndDelete onAddButton={openAddModalHandler} />
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
                <Table.Row key={treatment.id}>
                  <Table.DataCell>{treatment.treatmentName}</Table.DataCell>
                  <Table.DataCell>{treatment.price}</Table.DataCell>

                  <Table.DataCell>
                    <DeleteButton />
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
