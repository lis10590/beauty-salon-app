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
  console.log(clients);
  // const clientDate = JSON.parse(client.treatmentHistory.date);
  // console.log(clientDate);
  // const date = new Date(clientDate);
  // console.log(date);
  console.log(client.treatmentHistory.date);

  return (
    <Card>
      <Panel.Heading>{client.fullName}</Panel.Heading>
      <Panel.Block>
        <Label className="mr-2 mb-0">Phone Number:</Label>
        {client.phoneNumber}
      </Panel.Block>
      <Panel.Block>
        <Label className="mr-2 mb-0">Treatment History:</Label>
        {client.treatmentHistory.treatmentName} on
        {client.treatmentHistory.date}
      </Panel.Block>
      <Panel.Block>
        <Label className="mr-2 mb-0">Products Purchased:</Label>
        {client.productsPurchased}
      </Panel.Block>
    </Card>
  );
};

export default ClientCard;
