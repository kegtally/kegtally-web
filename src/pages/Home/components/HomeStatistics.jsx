import React, { Fragment } from "react";
import { Statistic, Grid } from "semantic-ui-react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const HomeStatistics = ({ data: { batches = [] } }) => {
  return (
    <Fragment>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Statistic>
              <Statistic.Value>
                {batches.reduce((acc, b) => {
                  return b.litres + acc;
                }, 0)}
              </Statistic.Value>
              <Statistic.Label>Litres</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Statistic>
              <Statistic.Value>300</Statistic.Value>
              <Statistic.Label>Kegs</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Statistic>
              <Statistic.Value>1</Statistic.Value>
              <Statistic.Label>Purpose</Statistic.Label>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};

export default graphql(gql`
  query {
    batches {
      litres
    }
  }
`)(HomeStatistics);
