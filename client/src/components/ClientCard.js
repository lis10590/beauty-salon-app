import Card from "./Card";
import { Label, Panel } from "react-bulma-companion";
import { useParams } from "react-router-dom";
import clients from "../tests/clientSideTests";

const ClientCard = () => {
  let { clientId } = useParams();
  let [client] = clients.filter((client) => clientId === client.id);

  return (
    <Card>
      <Panel.Heading>{client.fullName}</Panel.Heading>
      <Panel.Block>
        <Label className="mr-2 mb-0">Phone Number:</Label>
        {client.phoneNumber}
      </Panel.Block>
      <Panel.Block>
        <Label className="mr-2 mb-0">Treatment History:</Label>
        {client.treatmentHistory.treatmentName} on{" "}
        {client.treatmentHistory.date.toLocaleString()}
      </Panel.Block>
      <Panel.Block>
        <Label className="mr-2 mb-0">Products Purchased:</Label>
        {client.productsPurchased}
      </Panel.Block>
    </Card>
  );
};

export default ClientCard;
