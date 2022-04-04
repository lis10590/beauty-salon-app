import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllClients, selectAllClients } from "../store/clients";
import Card from "./Card";
import { Label, Panel } from "react-bulma-companion";
import { useParams } from "react-router-dom";

const ClientCard = () => {
  let { clientId } = useParams();
  const dispatch = useDispatch();
  const clients = useSelector(selectAllClients);

  useEffect(() => {
    dispatch(getAllClients());
  }, [dispatch]);

  let [client] = clients.filter((client) => clientId === client._id);
  console.log(client);

  return (
    <Card>
      <Panel.Heading>{client.fullName}</Panel.Heading>
      <Panel.Block>
        <Label className="mr-2 mb-0">Phone Number:</Label>
        {client.phoneNumber}
      </Panel.Block>
      <Panel.Block>
        <Label className="mr-2 mb-0">Treatment History:</Label>
        {client.treatmentHistory.treatmentName}
      </Panel.Block>
      {/* <ul>
        {client.treatmentHistory.treatmentName.map((treatmentName) => {
          return <li>{treatmentName}</li>;
        })}
      </ul> */}
      <Panel.Block>
        <Label className="mr-2 mb-0">Products Purchased:</Label>
        {client.productsPurchased}
      </Panel.Block>
    </Card>
  );
};

export default ClientCard;
