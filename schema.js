const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt
} = require('graphql');

let count = 0;
let title = 'a name';

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        description: 'the count',
        resolve: function() {
          return count;
        }
      },
      title: {
        type: GraphQLString,
        description: 'the count',
        resolve: function() {
          return title;
        }
      },
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      incrementCount: {
        type: GraphQLInt,
        description: 'Increments the count',
        resolve: function() {
          return ++count;
        }
      },
      decrementCount: {
        type: GraphQLInt,
        description: 'Decrements the count',
        resolve: function() {
          return --count;
        }
      }
    }
  })
});

module.exports = schema;
