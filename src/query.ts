import { gql } from "graphql-request";

export const CREATE_PROJECT = gql`
  mutation CreateProject($region: String!) {
    createProject(region: $region) {
      _id
    }
  }
`;

export const CREATE_SERVICE = gql`
  mutation CreateService(
    $projectID: ObjectID!
    $template: ServiceTemplate!
    $name: String!
  ) {
    createService(projectID: $projectID, template: $template, name: $name) {
      _id
    }
  }
`;

export const GET_ENVIRONMENTS = gql`
  query GetEnvironment($projectID: ObjectID!) {
    environments(projectID: $projectID) {
      _id
    }
  }
`;

export const CREATE_DOMAIN = gql`
  mutation CreateDomain(
    $serviceID: ObjectID!
    $environmentID: ObjectID!
    $domain: String!
    $isGenerated: Boolean!
  ) {
    addDomain(
      serviceID: $serviceID
      environmentID: $environmentID
      domain: $domain
      isGenerated: $isGenerated
    ) {
      domain
    }
  }
`;
