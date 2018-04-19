import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Header, Container } from "semantic-ui-react";
import HomeStatistics from "./components/HomeStatistics";
import HomeTable from "./components/HomeTable";

const Home = ({ data: { beers = [] } }) => {
  return (
    <Container>
      <Header as="h2" icon textAlign="center">
        <Header.Content>Kegs</Header.Content>
      </Header>
      <HomeStatistics />
      <HomeTable beers={beers} />
    </Container>
  );
};

export default graphql(gql`
  query {
    beers {
      name
      fiftyCount
      thirtyCount
      twentyCount
    }
  }
`)(Home);
