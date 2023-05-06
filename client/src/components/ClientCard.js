import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllClients, selectAllClients } from "../store/clients";
import Card from "./UI/Card";
import { modalActions } from "../store/modal";
import AddButton from "./UI/AddButton";
import AddPurchasedProducts from "./Addition Modals/AddPurchasedProducts";
import { Label, Panel } from "react-bulma-companion";
import { useParams } from "react-router-dom";
import styles from "../styles/ClientCard.scss";

const ClientCard = () => {
  let { clientId } = useParams();
  const dispatch = useDispatch();
  const clients = useSelector(selectAllClients);
  const addModal = useSelector((state) => state.modal.addModalOpen);

  let [client] = clients.filter((client) => clientId === client._id);

  useEffect(() => {
    dispatch(getAllClients());
  }, [dispatch]);

  const closeAddModalHandler = () => {
    dispatch(modalActions.addModalClose());
  };

  const openAddModalHandler = () => {
    dispatch(modalActions.addModalOpen());
  };

  return (
    <>
      <Card>
        <Panel.Heading style={{ backgroundColor: "#FFE1E1" }}>
          {client ? client.fullName : null}
        </Panel.Heading>
        <Panel.Block style={{ backgroundColor: "white" }}>
          <Label className="mr-2 mb-0">Phone Number:</Label>
          {client ? client.phoneNumber : null}
        </Panel.Block>
        <Panel.Block style={{ backgroundColor: "white" }}>
          <Label className="mr-2 mb-0">Treatment History:</Label>
        </Panel.Block>
        {client.treatmentHistory
          ? client.treatmentHistory.map((treatment) => {
              const treatmentDate = new Date(treatment.date).toLocaleDateString(
                "en-US"
              );
              return (
                <ul style={{ backgroundColor: "white" }}>
                  <li>{treatment.treatmentName + " on " + treatmentDate}</li>
                </ul>
              );
            })
          : null}

        <Panel.Block style={{ backgroundColor: "white" }}>
          <div>
            <AddButton
              onAddButton={openAddModalHandler}
              className="products-button"
            />
          </div>
          <Label className="mr-2 mb-0">Products Purchased:</Label>
        </Panel.Block>
        <ul style={{ backgroundColor: "white" }}>
          {client
            ? client.productsPurchased.map((product) => {
                const purchaseDate = new Date(product.date).toLocaleDateString(
                  "en-US"
                );
                return (
                  <li>
                    {product.productName} on {purchaseDate}
                  </li>
                );
              })
            : null}
        </ul>
      </Card>
      <AddPurchasedProducts
        client={client ? client.phoneNumber : null}
        isOpen={addModal}
        onClose={closeAddModalHandler}
      />
    </>
  );
};

export default ClientCard;
