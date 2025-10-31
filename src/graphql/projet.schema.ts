export default `
  type Projet {
    _id: ID!
    titre: String!
    description: String
    urlGit: String
    urlDemo: String
    image: String
    competences: [ID!]
    createdAt: Date
    updatedAt: Date
  }

  extend type Query {
    projets: [Projet!]!
    projet(_id: ID!): Projet
  }

  input CreateProjetInput {
    titre: String!
    description: String
    urlGit: String
    urlDemo: String
    image: String
    competences: [ID!]
  }

  input UpdateProjetInput {
    titre: String
    description: String
    urlGit: String
    urlDemo: String
    image: String
    competences: [ID!]
  }
  
  extend type Mutation {
    createProjet(input: CreateProjetInput!): Projet!
    updateProjet(_id: ID!, input: UpdateProjetInput!): Projet
    deleteProjet(_id: ID!): Boolean!
  }
`;
