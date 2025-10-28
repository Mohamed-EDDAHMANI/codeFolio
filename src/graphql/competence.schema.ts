export default `
  type Competence {
    id: ID!
    nom: String!
    categorie: String!
    userId: ID!
    createdAt: Date
    updatedAt: Date
  }

  extend type Query {
    competences(userId: ID): [Competence!]!
    competence(id: ID!): Competence
  }

  input CreateCompetenceInput {
    nom: String!
    categorie: String!
    userId: ID!
  }

  input UpdateCompetenceInput {
    nom: String
    categorie: String
  }

  extend type Mutation {
    createCompetence(input: CreateCompetenceInput!): Competence!
    updateCompetence(id: ID!, input: UpdateCompetenceInput!): Competence
    deleteCompetence(id: ID!): Boolean!
  }
`;
