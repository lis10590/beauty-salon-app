import { Panel } from "react-bulma-companion";
import { Link, useParams } from "react-router-dom";
import clients from "../../tests/clientSideTests";
import AddAndDelete from "../AddAndDelete";
import Card from "../Card";
const Clients = () => {
  let { clientId } = useParams();
  return (
    <Card>
      <Panel.Heading>
        Clients
        <AddAndDelete />
      </Panel.Heading>
      {clients.map((client) => {
        clientId = client.id;
        return (
          <Panel.Block
            component={Link}
            to={`/clients/${clientId}`}
            className="is-justify-content-space-evenly"
          >
            {client.fullName}
          </Panel.Block>
        );
      })}
    </Card>
  );
};

export default Clients;
