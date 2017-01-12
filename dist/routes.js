'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _utils = require('./utils');

function routes(server) {
  var header = 'Authorization: ';
  server.get('/', function (req, res) {
    res.send('ok');
  });

  server.post('/start/events', function (req, res) {
    (0, _utils.sendEventsToAmplitude)(res);
    // res.send('ok')
  });
}