import { Label, Control, Input } from "react-bulma-companion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const InputComponent = (props) => {
  return (
    <div>
      <Label size={props.labelSize}>{props.labelContent}</Label>
      <Control className={props.controlClassName}>
        <Input
          name={props.inputName}
          type={props.inputType}
          size={props.inputSize}
          onChange={props.inputOnChange}
          onBlur={props.inputOnBlur}
          value={props.inputValue}
        />
        <span className={props.spanClassName}>
          <FontAwesomeIcon icon={props.icon} />
        </span>
      </Control>
    </div>
  );
};

export default InputComponent;
