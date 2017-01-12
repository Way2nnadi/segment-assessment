import assert from 'assert';
import request from 'request';
import fs from 'fs';

import '../src/server.js';

let testUri = `http://127.0.0.1:${process.env.PORT || 3000}`

describe('Testing Node Server', () => {
  it('should return 200', done => {
    request({
        url: testUri,
        method: "GET",
    }, (err, res, body) => {
        assert.equal(200, res.statusCode);
        done();
    });
  });
});

describe('Homepage Endpoint', () => {
  it('should return index.html', done => {
    request({
        url: testUri,
        method: "GET",
    }, (err, res, body) => {
      fs.readFile('index.html', (err, data) => {
        assert.equal(data, body);
        done();
      })
    });
  });
})

describe('Start Event Endpoint', () => {
  it('should return ok as the body', done => {
    request({
        url: testUri + "/start/events",
        method: "POST",
    }, (err, res, body) => {
        assert.equal('ok', body);
        done();
    });
  });
});
