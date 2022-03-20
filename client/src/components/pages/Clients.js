import { useState } from "react";
import { Panel } from "react-bulma-companion";
import { Link, useParams } from "react-router-dom";
import clients from "../../tests/clientSideTests";
import AddAndDelete from "../AddAndDelete";
import Card from "../Card";
import AddClient from "../AddClient";
import DeleteClient from "../DeleteClient";
const Clients = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  let { clientId } = useParams();

  const closeAddModalHandler = () => {
    setAddModalOpen(false);
  };

  const openAddModalHandler = () => {
    setAddModalOpen(true);
  };

  const closeDeleteModalHandler = () => {
    setDeleteModalOpen(false);
  };

  const openDeleteModalHandler = () => {
    setDeleteModalOpen(true);
  };

  const onClientAddedHandler = (event) => {};

  const onClientDeletedHandler = () => {};

  return (
    <div>
      <Card>
        <Panel.Heading>
          Clients
          <AddAndDelete
            onAddButton={openAddModalHandler}
            onDeleteButton={openDeleteModalHandler}
          />
        </Panel.Heading>
        {clients.map((client) => {
          clientId = client.id;
          return (
            <Panel.Block
              key={client.id}
              component={Link}
              to={`/clients/${clientId}`}
              className="is-justify-content-space-evenly"
            >
              {client.fullName}
            </Panel.Block>
          );
        })}
      </Card>
      <AddClient
        isOpen={addModalOpen}
        onClose={closeAddModalHandler}
        onClientAdded={(event) => onClientAddedHandler(event)}
      />
      <DeleteClient
        isOpen={deleteModalOpen}
        onClose={closeDeleteModalHandler}
        onClientDeleted={(event) => onClientDeletedHandler(event)}
      />
    </div>
  );
};

export default Clients;
