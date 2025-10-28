export default `
  type Social {
    id: ID!
    nom: String!
    liensSociaux: String!
    icon: String
    userId: ID!
    createdAt: Date
    updatedAt: Date
  }

  extend type Query {
    socials(userId: ID): [Social!]!
    social(id: ID!): Social
  }

  input CreateSocialInput {
    nom: String!
    liensSociaux: String!
    icon: String
    userId: ID!
  }

  input UpdateSocialInput {
    nom: String
    liensSociaux: String
    icon: String
  }

  extend type Mutation {
    createSocial(input: CreateSocialInput!): Social!
    updateSocial(id: ID!, input: UpdateSocialInput!): Social
    deleteSocial(id: ID!): Boolean!
  }
`;
