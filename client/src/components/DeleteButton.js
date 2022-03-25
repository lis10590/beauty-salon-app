import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/mystyles.scss";

const DeleteButton = () => {
  return <FontAwesomeIcon className="delete-button" icon={faTrashCan} />;
};

export default DeleteButton;
