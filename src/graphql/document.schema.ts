export default `
  type Document {
    _id: ID!
    nom: String!
    urlStocket: String!
    userId: ID!
    createdAt: Date
    updatedAt: Date
  }

  extend type Query {
    documents(userId: ID): [Document!]!
    document(_id: ID!): Document
  }

  input CreateDocumentInput {
    nom: String!
    urlStocket: String!
    userId: ID!
  }

  input UpdateDocumentInput {
    nom: String
    urlStocket: String
  }

  extend type Mutation {
    createDocument(input: CreateDocumentInput!): Document!
    updateDocument(_id: ID!, input: UpdateDocumentInput!): Document
    deleteDocument(_id: ID!): Boolean!
  }
`;
