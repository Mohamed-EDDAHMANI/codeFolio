export default `
  type Visitor {
    _id: ID
    ip_address: String
    country: String
    city: String
    isp: String
    user_agent: String
    referrer: String
    accept_language: String
    screen_resolution: String
    device_type: String
    timezone: String
    visit_time: Date
    pages_visited: [String!]
    session_duration: Int
    createdAt: Date
    updatedAt: Date
  }

  extend type Query {
    visitors(limit: Int, skip: Int): [Visitor!]!
    visitor(_id: ID!): Visitor
  }

  input CreateVisitorInput {
    ip_address: String
    country: String
    city: String
    isp: String
    user_agent: String
    referrer: String
    accept_language: String
    screen_resolution: String
    device_type: String
    timezone: String
    visit_time: Date
    pages_visited: [String!]
    session_duration: Int
  }

  extend type Mutation {
    createVisitor(input: CreateVisitorInput!): Visitor!
    deleteVisitor(_id: ID!): Boolean!
  }
`;
