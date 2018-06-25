const express = require('express');
const graphqlMiddleware = require('express-graphql');
const router = express.Router();

const schema = require('../graphql/schema');
const resolver = require('../graphql/resolver');

const endpoint = graphqlMiddleware({
  schema,
  graphiql: true,
  rootValue: resolver
});

/* GET users listing. */
router.get('/', endpoint);
router.post('/', endpoint);

module.exports = router;
