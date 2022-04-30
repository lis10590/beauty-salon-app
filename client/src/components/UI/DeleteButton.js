import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/mystyles.scss";

const DeleteButton = (props) => {
  return (
    <FontAwesomeIcon
      onClick={props.onDelete}
      className="delete-button"
      icon={faTrashCan}
    />
  );
};

export default DeleteButton;
