require('./server');

const express = require('express');
const schema = require('./schema');
const {graphql} = require('graphql');
const bodyParser = require('body-parser');
const restify = require('restify');
const graphqlHTTP = require('express-graphql');


let app = restify.createServer();
let PORT = process.env.PORT || 3000;

app.use(bodyParser.text({type: 'application/graphql'}));

app.post('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: false
}));

app.get('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

let server = app.listen(PORT, function(){
  let host = server.address().address;
  let port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
})
