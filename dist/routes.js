'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;
function routes(server) {

  server.get('/', function (req, res) {
    res.send('ok');
  });
}