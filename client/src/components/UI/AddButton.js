import { Button } from "react-bulma-companion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddButton = (props) => {
  return (
    <div className="mt-3">
      <Button
        onClick={props.onAddButton}
        size="small"
        className={`${props.className} + is-rounded is-danger`}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
};

export default AddButton;
