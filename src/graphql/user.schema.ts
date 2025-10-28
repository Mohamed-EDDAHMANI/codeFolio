export default `
  scalar Date

  type User {
    id: ID!
    nom: String!
    prenom: String!
    email: String!
    image: String
    dateNaissance: Date
    caver: String
    adress: String
    biographie: String
    createdAt: Date
    updatedAt: Date
  }

  extend type Query {
    users: [User!]!
    user(id: ID!): User
  }

  input CreateUserInput {
    nom: String!
    prenom: String!
    email: String!
    password: String!
    image: String
    dateNaissance: Date
    caver: String
    adress: String
    biographie: String
  }

  input UpdateUserInput {
    nom: String
    prenom: String
    email: String
    password: String
    image: String
    dateNaissance: Date
    caver: String
    adress: String
    biographie: String
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User
    deleteUser(id: ID!): Boolean!
  }
`;
