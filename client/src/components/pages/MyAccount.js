import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/modal";
import ChangePassword from "../ChangePassword";
import { Panel, Label, Button } from "react-bulma-companion";
import { Link } from "react-router-dom";
import Card from "../Card";
import { accountDetails } from "../../tests/clientSideTests";

const MyAccount = () => {
  const dispatch = useDispatch();
  const addModal = useSelector((state) => state.modal.addModalOpen);
  const { firstName, lastName, email } = accountDetails;
  const closeAddModalHandler = () => {
    dispatch(modalActions.addModalClose());
  };

  const openAddModalHandler = () => {
    dispatch(modalActions.addModalOpen());
  };
  return (
    <>
      <Card>
        <Panel.Heading>Personal Info</Panel.Heading>

        <Panel.Block>
          <Label className="mr-2 mb-0"> First Name: </Label>
          {firstName}
        </Panel.Block>
        <Panel.Block>
          <Label className="mr-2 mb-0"> Last Name: </Label>
          {lastName}
        </Panel.Block>
        <Panel.Block>
          <Label className="mr-2 mb-0"> E-mail Adress: </Label>
          {email}
        </Panel.Block>
        <Panel.Block>
          <Label className="mr-2"> Password: </Label>
          ******
          <Button
            size="small"
            className="ml-6 is-danger"
            onClick={openAddModalHandler}
          >
            Modify
          </Button>
        </Panel.Block>
      </Card>
      <ChangePassword isOpen={addModal} onClose={closeAddModalHandler} />
    </>
  );
};

export default MyAccount;
