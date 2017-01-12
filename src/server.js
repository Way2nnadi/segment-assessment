import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import * as util from './utils';
import path from 'path';

// DEFINE VARIABLES
let server = express();     
let port = process.env.PORT || 3000;

// MIDDLEWARE
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

// ROUTES
routes(server);

server.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
})