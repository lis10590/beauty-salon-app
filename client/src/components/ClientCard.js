import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllClients, selectAllClients } from "../store/clients";
import {
  getAllTreatmentHistoriesByName,
  selectAllTreatmentHistories,
} from "../store/treatmentHistory";
import Card from "./Card";
import AddAndDelete from "./AddAndDelete";
import { Label, Panel } from "react-bulma-companion";
import { useParams } from "react-router-dom";
import styles from "../styles/ClientCard.scss";

const ClientCard = () => {
  let { clientId } = useParams();
  const dispatch = useDispatch();
  const clients = useSelector(selectAllClients);
  const treatmentHistories = useSelector(selectAllTreatmentHistories);

  let [client] = clients.filter((client) => clientId === client._id);

  useEffect(() => {
    dispatch(getAllClients());
    if (client) {
      dispatch(getAllTreatmentHistoriesByName(client.fullName));
    }
  }, [dispatch]);

  useEffect(() => {
    if (client) {
      dispatch(getAllTreatmentHistoriesByName(client.fullName));
    }
  }, [dispatch, client]);

  return (
    <Card>
      <Panel.Heading>{client ? client.fullName : null}</Panel.Heading>
      <Panel.Block>
        <Label className="mr-2 mb-0">Phone Number:</Label>
        {client ? client.phoneNumber : null}
      </Panel.Block>
      <Panel.Block>
        <Label className="mr-2 mb-0">Treatment History:</Label>
      </Panel.Block>
      {treatmentHistories
        ? treatmentHistories.map((treatment) => {
            const treatmentDate = new Date(treatment.date).toLocaleDateString(
              "en-US"
            );
            return (
              <ul>
                <li>{treatment.treatmentName + " on " + treatmentDate}</li>
              </ul>
            );
          })
        : null}

      <Panel.Block>
        <div>
          <AddAndDelete className="products-button" />
        </div>
        <Label className="mr-2 mb-0">Products Purchased:</Label>
        {client ? client.productsPurchased : null}
      </Panel.Block>
    </Card>
  );
};

export default ClientCard;
