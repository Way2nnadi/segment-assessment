import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import * as util from './utils';

// DEFINE VARIABLES
let server = express();     

// MIDDLEWARE
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

// ROUTES
routes(server);
// analyze();
server.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on Port: ${process.env.PORT || 3000}`);
})