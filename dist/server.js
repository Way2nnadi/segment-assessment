'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// DEFINE VARIABLES
var server = (0, _express2.default)();

// MIDDLEWARE
server.use(_bodyParser2.default.json());
server.use(_bodyParser2.default.urlencoded({ extended: true }));

// ROUTES
(0, _routes2.default)(server);

server.listen(process.env.PORT || 3000, function () {
  console.log('Listening on Port: ' + (process.env.PORT || 3000));
});