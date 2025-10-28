export default `
  type Experience {
    id: ID!
    poste: String!
    entreprise: String!
    dateDubee: Date
    dateFinal: Date
    description: String
    userId: ID!
    createdAt: Date
    updatedAt: Date
  }

  extend type Query {
    experiences(userId: ID): [Experience!]!
    experience(id: ID!): Experience
  }

  input CreateExperienceInput {
    poste: String!
    entreprise: String!
    dateDubee: Date
    dateFinal: Date
    description: String
    userId: ID!
  }

  input UpdateExperienceInput {
    poste: String
    entreprise: String
    dateDubee: Date
    dateFinal: Date
    description: String
  }

  extend type Mutation {
    createExperience(input: CreateExperienceInput!): Experience!
    updateExperience(id: ID!, input: UpdateExperienceInput!): Experience
    deleteExperience(id: ID!): Boolean!
  }
`;
