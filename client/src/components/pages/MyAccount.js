import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/modal";
import ChangePassword from "../ChangePassword";
import { Panel, Label, Button } from "react-bulma-companion";

import Card from "../Card";

const MyAccount = () => {
  const dispatch = useDispatch();
  const addModal = useSelector((state) => state.modal.addModalOpen);
  const { user } = useSelector((state) => state.auth);

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
          {user.firstName}
        </Panel.Block>
        <Panel.Block>
          <Label className="mr-2 mb-0"> Last Name: </Label>
          {user.lastName}
        </Panel.Block>
        <Panel.Block>
          <Label className="mr-2 mb-0"> E-mail Adress: </Label>
          {user.email}
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
