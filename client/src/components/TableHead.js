import { Table } from "react-bulma-companion";
const TableHead = (props) => {
  return (
    <Table.Head>
      <Table.Row>{props.children}</Table.Row>
    </Table.Head>
  );
};

export default TableHead;
