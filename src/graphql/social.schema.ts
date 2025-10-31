export default `
  type Social {
    _id: ID!
    nom: String!
    liensSociaux: String!
    icon: String
    userId: ID!
    createdAt: Date
    updatedAt: Date
  }

  extend type Query {
    socials(userId: ID): [Social!]!
    social(_id: ID!): Social
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
    updateSocial(_id: ID!, input: UpdateSocialInput!): Social
    deleteSocial(_id: ID!): Boolean!
  }
`;
