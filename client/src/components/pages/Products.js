import Card from "../Card";
import TableHead from "../TableHead";
import AddAndDelete from "../AddAndDelete";
import { productList } from "../../tests/clientSideTests";
import { Table, Panel } from "react-bulma-companion";

const Products = () => {
  const tableHeadings = [
    "Product Name",
    "Manufacturer",
    "Product Type",
    "Product Group",
    "Price (ILS)",
  ];
  return (
    <Card>
      <Panel.Heading>
        Product List
        <AddAndDelete />
      </Panel.Heading>

      <Table>
        <TableHead>
          {tableHeadings.map((heading) => {
            return <Table.HeadCell key={heading}>{heading}</Table.HeadCell>;
          })}
        </TableHead>
        <Table.Body>
          {productList.map((product) => {
            return (
              <Table.Row key={product.productName}>
                <Table.DataCell>{product.productName}</Table.DataCell>
                <Table.DataCell>{product.manufacturer}</Table.DataCell>
                <Table.DataCell>{product.productType}</Table.DataCell>
                <Table.DataCell>{product.productGroup}</Table.DataCell>
                <Table.DataCell>{product.price}</Table.DataCell>
                {/* <Button size="small" className="mr-2 mt-2 is-danger">
                  Modify
                </Button> */}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Card>
  );
};

export default Products;
