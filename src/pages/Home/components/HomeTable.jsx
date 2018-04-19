import React from "react";
import { Table, Header } from "semantic-ui-react";

export default ({ beers }) => {
  const generateTableRows = () => {
    return beers.map(beer => {
      return (
        <Table.Row>
          <Table.Cell>
            <Header as="h4" image>
              <Header.Content>
                {beer.name}
                <Header.Subheader>Beer</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{beer.fiftyCount}</Table.Cell>
          <Table.Cell>{beer.thirtyCount}</Table.Cell>
          <Table.Cell>{beer.twentyCount}</Table.Cell>
        </Table.Row>
      );
    });
  };

  return (
    <Table basic="very" celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Beer</Table.HeaderCell>
          <Table.HeaderCell>50L</Table.HeaderCell>
          <Table.HeaderCell>30L</Table.HeaderCell>
          <Table.HeaderCell>20L</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{generateTableRows()}</Table.Body>
    </Table>
  );
};
