import express from 'express';
import schema from './schema';
import { graphql } from 'graphql';
import graphqlHTTP from 'express-graphql';

var PORT = process.env.PORT || 3000;
var app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log('GraphQL listening at http://localhost:' + PORT);
})
