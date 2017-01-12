'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.sendEventsToAmplitude = sendEventsToAmplitude;

var _analyticsNode = require('analytics-node');

var _analyticsNode2 = _interopRequireDefault(_analyticsNode);

var _readline = require('readline');

var readline = _interopRequireWildcard(_readline);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var analytics = new _analyticsNode2.default('csDqnJdlycujIJhlE76Yheo8LdvTLIw9', { flushAt: 1 });

function sendEventsToAmplitude(respnse) {
  var lineReader = readline.createInterface({
    input: _fs2.default.createReadStream('data/test.txt')
  });

  lineReader.on('line', function (line) {

    var event = JSON.parse(line);
    identifyAndTrackEvent(event);
  });
}

sendEventsToAmplitude();

function identifyAndTrackEvent(evt) {
  analytics.identify({
    userId: evt.userId,
    traits: _extends({}, event)
  });

  analytics.track({
    event: evt.event || "Member Added",
    userId: evt.userId,
    integrations: {
      'All': false,
      'Amplitude': true
    }
  });
}