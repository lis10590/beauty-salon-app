import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { modalActions } from "../../store/modal";
import {
  selectAllClients,
  getAllClients,
  deleteOneClient,
  reset,
} from "../../store/clients";
import { Panel, Control } from "react-bulma-companion";
import { Link, useParams } from "react-router-dom";
import AddAndDelete from "../AddAndDelete";
import Card from "../Card";
import AddClient from "../AddClient";
import DeleteModal from "../DeleteModal";
import DeleteButton from "../DeleteButton";

const Clients = () => {
  const dispatch = useDispatch();

  const addModal = useSelector((state) => state.modal.addModalOpen);

  const clients = useSelector(selectAllClients);
  let { clientId } = useParams();

  useEffect(() => {
    dispatch(getAllClients());
    // return () => {
    //   dispatch(reset());
    // };
  }, [dispatch]);

  const closeAddModalHandler = () => {
    dispatch(modalActions.addModalClose());
  };

  const openAddModalHandler = () => {
    dispatch(modalActions.addModalOpen());
  };

  const openDeleteModalHandler = () => {};

  return (
    <div>
      <Card>
        <Panel.Heading>
          Clients
          <AddAndDelete onAddButton={openAddModalHandler} />
        </Panel.Heading>
        {clients.map((client) => {
          clientId = client._id;
          return (
            <Panel.Block>
              <Control
                key={client._id}
                component={Link}
                to={`/clients/${clientId}`}
                className="is-justify-content-space-between"
              >
                {client.fullName}
              </Control>
              <DeleteButton
                onDelete={() => dispatch(deleteOneClient(client._id))}
              />
            </Panel.Block>
          );
        })}
      </Card>
      <AddClient isOpen={addModal} onClose={closeAddModalHandler} />
      <DeleteModal isOpen={addModal} onClose={closeAddModalHandler} />
    </div>
  );
};

export default Clients;
