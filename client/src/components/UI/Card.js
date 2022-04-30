import { Column, Panel } from "react-bulma-companion";
import mystyles from "../../styles/mystyles.scss";

const Card = (props) => {
  return (
    <Column size="half" offset="one-quarter" className="has-text-centered">
      <Panel className="card-panel">{props.children}</Panel>
    </Column>
  );
};

export default Card;
