import { Button, Buttons } from "react-bulma-companion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPlus } from "@fortawesome/free-solid-svg-icons";

const AddAndDelete = () => {
  return (
    <Buttons className="is-justify-content-center mt-2">
      <Button size="small" className="is-rounded is-danger">
        <FontAwesomeIcon icon={faPlus} />
      </Button>
      <Button size="small" className="is-rounded is-danger">
        <FontAwesomeIcon icon={faTrashCan} />
      </Button>
    </Buttons>
  );
};

export default AddAndDelete;
