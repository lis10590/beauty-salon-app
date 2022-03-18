import { Columns, Column, Panel } from "react-bulma-companion";

const Card = (props) => {
  return (
    <Columns className="has-text-centered" mobile centered>
      <Column size="half">
        <Panel>{props.children}</Panel>
      </Column>
    </Columns>
  );
};

export default Card;
