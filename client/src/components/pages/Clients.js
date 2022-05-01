import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { modalActions } from "../../store/modal";
import {
  selectAllClients,
  getAllClients,
  deleteOneClient,
} from "../../store/clients";
import { Panel, Control } from "react-bulma-companion";
import { Link, useParams } from "react-router-dom";
import AddButton from "../UI/AddButton";
import Card from "../UI/Card";
import AddClient from "../Addition Modals/AddClient";
import DeleteModal from "../DeleteModal";
import DeleteButton from "../UI/DeleteButton";
import "../../styles/mystyles.scss";

const Clients = () => {
  const dispatch = useDispatch();

  const addModal = useSelector((state) => state.modal.addModalOpen);
  const deleteModal = useSelector((state) => state.modal.deleteModalOpen);

  const clients = useSelector(selectAllClients);
  let { clientId } = useParams();

  useEffect(() => {
    dispatch(getAllClients());
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
        <Panel.Heading className="p-heading">
          Clients
          <AddButton onAddButton={openAddModalHandler} />
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
              <DeleteButton onDelete={openDeleteModalHandler} />
              <DeleteModal
                onYesClick={() => {
                  dispatch(deleteOneClient(client._id));
                  dispatch(modalActions.deleteModalClose());
                }}
                onNoClick={closeDeleteModalHandler}
                isOpen={deleteModal}
                onClose={closeDeleteModalHandler}
              />
            </Panel.Block>
          );
        })}
      </Card>
      <AddClient isOpen={addModal} onClose={closeAddModalHandler} />
    </div>
  );
};

export default Clients;
