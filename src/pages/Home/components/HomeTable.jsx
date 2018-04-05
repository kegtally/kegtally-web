import React from "react";
import { Table, Header } from "semantic-ui-react";

export default () => {
  const generateTableRows = () => {
    return [1, 2, 3].map(row => {
      return (
        <Table.Row>
          <Table.Cell>
            <Header as="h4" image>
              <Header.Content>
                Lena
                <Header.Subheader>Human Resources</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>22</Table.Cell>
          <Table.Cell>22</Table.Cell>
          <Table.Cell>22</Table.Cell>
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
