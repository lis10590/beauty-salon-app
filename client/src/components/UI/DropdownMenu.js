import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Dropdown, Icon, Button } from "react-bulma-companion";

const DropdownMenu = (props) => {
  return (
    <Dropdown active={props.active}>
      <Dropdown.Trigger>
        <Button
          onClick={props.onClick}
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>{props.title}</span>
          <Icon size="small">
            <FontAwesomeIcon icon={faAngleDown} />
          </Icon>
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Menu id="dropdown-menu" role="menu">
        <Dropdown.Content>{props.children}</Dropdown.Content>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
