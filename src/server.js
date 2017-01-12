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
server.use('/static', express.static(path.join(__dirname, 'public')))

// ROUTES
routes(server);
// analyze();

server.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
})