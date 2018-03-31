import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Page, Layout, Card, ResourceList } from "@shopify/polaris";

const Home = ({ data: { beers = [] } }) => {
  const renderItem = (item, index) => {
    return <ResourceList.Item key={index} {...item} />;
  };

  return (
    <Page title="Keg Tally">
      <Layout>
        <Layout.Section>
          <Card title="Beers" sectioned>
            <ResourceList
              items={beers.map(beer => {
                return {
                  url: `/${beer.id}`,
                  attributeOne: beer.name
                };
              })}
              renderItem={renderItem}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default graphql(gql`
  query {
    beers {
      name
      id
    }
  }
`)(Home);
