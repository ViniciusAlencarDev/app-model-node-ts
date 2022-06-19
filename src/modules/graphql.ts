// // const express = require('express')
// // const app = express()
// // const port = 1234
// // app.listen(port, () => console.log(`Server started in port ${port}`))

// var express = require('express');
// var { graphqlHTTP } = require('express-graphql');
// var { buildSchema } = require('graphql');
// const cors = require('cors')
// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);
// // The root provides a resolver function for each API endpoint
// let count = 0
// var root = {
//   hello: () => {
//     count++
//     return 'Hello world!' + count;
//   },
// };
// var app = express();
// app.use(cors())
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));

// app.listen(4000);
// console.log('Running a GraphQL API server at http://localhost:4000/graphql');
