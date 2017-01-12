'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _utils = require('./utils');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes(server) {
  server.get('/', function (req, res) {

    // old school way to load html files into the brower
    // wanted to make the err handling a bit more explicit
    _fs2.default.readFile('index.html', function (err, data) {
      if (err) {
        res.writeHead(404);
        res.write("Not Found!");
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
      }
      res.end();
    });
  });

  server.post('/start/events', function (req, res) {
    (0, _utils.sendEventsToAmplitude)(res);
  });
}