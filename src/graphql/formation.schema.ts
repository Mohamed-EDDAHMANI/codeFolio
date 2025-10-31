export default `
  type Formation {
    _id: ID!
    filiere: String!
    ecole: String!
    localisation: String
    dateDubee: Date
    dateFinal: Date
    description: String
    userId: ID!
    createdAt: Date
    updatedAt: Date
  }

  extend type Query {
    formations(userId: ID): [Formation!]!
    formation(_id: ID!): Formation
  }

  input CreateFormationInput {
    filiere: String!
    ecole: String!
    localisation: String
    dateDubee: Date
    dateFinal: Date
    description: String
    userId: ID!
  }

  input UpdateFormationInput {
    filiere: String
    ecole: String
    localisation: String
    dateDubee: Date
    dateFinal: Date
    description: String
  }

  extend type Mutation {
    createFormation(input: CreateFormationInput!): Formation!
    updateFormation(_id: ID!, input: UpdateFormationInput!): Formation
    deleteFormation(_id: ID!): Boolean!
  }
`;
