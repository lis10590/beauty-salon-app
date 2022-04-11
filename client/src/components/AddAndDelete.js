import { Button, Buttons } from "react-bulma-companion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddAndDelete = (props) => {
  return (
    <div className="mt-3">
      <Button
        onClick={props.onAddButton}
        size="small"
        className={`${props.className} + is-rounded is-danger`}
        /*"is-rounded is-danger"*/
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
};

export default AddAndDelete;
