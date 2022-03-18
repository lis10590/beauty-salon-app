import { Panel } from "react-bulma-companion";
import { Link } from "react-router-dom";
import clients from "../../tests/clientSideTests";
import AddAndDelete from "../AddAndDelete";
import Card from "../Card";
const Clients = () => {
  return (
    <Card>
      <Panel.Heading>
        Clients
        <AddAndDelete />
      </Panel.Heading>
      {clients.map((client) => {
        return (
          <Panel.Block
            component={Link}
            to="/"
            className="is-justify-content-space-evenly"
          >
            {client}
          </Panel.Block>
        );
      })}
    </Card>
  );
};

export default Clients;
