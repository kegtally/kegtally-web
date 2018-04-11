import React from "react";
import { Table, Header } from "semantic-ui-react";

export default ({ beers }) => {
  const countFills = () => {
    return beers.reduce((a, beer) => {
      return {
        ...a,
        [beer.name]: {
          "50L": beer.batches.reduce((b, batch) => {
            return (b += batch.fills.filter(fill => {
              return fill.keg.litres === "A_50";
            }).length);
          }, 0),
          "30L": beer.batches.reduce((b, batch) => {
            return (b += batch.fills.filter(fill => {
              return fill.keg.litres === "A_30";
            }).length);
          }, 0),
          "20L": beer.batches.reduce((b, batch) => {
            return (b += batch.fills.filter(fill => {
              return fill.keg.litres === "A_20";
            }).length);
          }, 0)
        }
      };
    }, {});
  };

  const generateTableRows = () => {
    return Object.entries(countFills()).map(([name, beer]) => {
      return (
        <Table.Row>
          <Table.Cell>
            <Header as="h4" image>
              <Header.Content>
                {name}
                <Header.Subheader>Beer</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{beer["50L"]}</Table.Cell>
          <Table.Cell>{beer["30L"]}</Table.Cell>
          <Table.Cell>{beer["20L"]}</Table.Cell>
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
