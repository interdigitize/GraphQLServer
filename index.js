require('babel-core');
require('./server');

const express = require('express');
const schema = require('./schema');
const {graphql} = require('graphql');
const bodyParser = require('body-parser');

let app = express();
let PORT = process.env.PORT || 3000;

app.use(bodyParser.text({type: 'application/graphql'}));

app.post('/graphql', (req, res) => {
  graphql(schema, req.body)
  .then((result) => {
    res.send(JSON.stringify(result, null, 2));
  })
})

let server = app.listen(PORT, function(){
  let host = server.address().address;
  let port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
})
