import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/modal";
import { selectAllClients } from "../../store/clients";
import { Panel, Control } from "react-bulma-companion";
import { Link, useParams } from "react-router-dom";
import AddAndDelete from "../AddAndDelete";
import Card from "../Card";
import AddClient from "../AddClient";
import DeleteClient from "../DeleteClient";
import DeleteButton from "../DeleteButton";

const Clients = () => {
  const dispatch = useDispatch();

  const addModal = useSelector((state) => state.modal.addModalOpen);

  const clients = useSelector(selectAllClients);
  let { clientId } = useParams();

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
          Clients
          <AddAndDelete onAddButton={openAddModalHandler} />
        </Panel.Heading>
        {clients.map((client) => {
          clientId = client.id;
          return (
            <Panel.Block>
              <Control
                key={client.id}
                component={Link}
                to={`/clients/${clientId}`}
                className="is-justify-content-space-between"
              >
                {client.fullName}
              </Control>
              <DeleteButton />
            </Panel.Block>
          );
        })}
      </Card>
      <AddClient isOpen={addModal} onClose={closeAddModalHandler} />
    </div>
  );
};

export default Clients;
