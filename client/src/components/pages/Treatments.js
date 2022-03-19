import Card from "../Card";
import AddAndDelete from "../AddAndDelete";
import { Panel } from "react-bulma-companion";
import { treatmentList } from "../../tests/clientSideTests";

const Treatments = () => {
  return (
    <Card>
      <Panel.Heading>
        Treatment List
        <AddAndDelete />
      </Panel.Heading>
      {treatmentList.map((treatment) => {
        return (
          <Panel.Block
            key={treatment}
            className="is-justify-content-space-evenly"
          >
            {treatment}
          </Panel.Block>
        );
      })}
    </Card>
  );
};

export default Treatments;
