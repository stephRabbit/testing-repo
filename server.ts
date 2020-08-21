import { applyGraphQL, gql } from 'https://deno.land/x/oak_graphql@0.3/mod.ts'

interface User {
  username: string
  email: string
  password: string
}

// Type
const typeDefs = (gql as any)`
  type User {
    username: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User]!
  }
  
  type Mutation {
    signup(username: String!, email: String!, password: String!)
  }
`

const users = [
  {
    username: 'Gizmo',
    email: 'gizmo@mo.com',
    password: 'gizmo',
  },
]

// Resolver
const resolvers = {
  Query: {
    users: () => users,
  },

  Mutation: {
    signup: (
      parent: any,
      { username, email, password }: User,
      ctx: any,
      info: any
    ): User => {
      const user = { username, email, password }

      users.push(user)

      return user
    },
  },
}

export const GraphQLService = await applyGraphQL({
  typeDefs,
  resolvers,
})
