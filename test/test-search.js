/* global describe */
/* global it */
'use strict';

var Twitter = require('../index');
var optional = require('optional');
var optConfig = {consumer_key: 'random', consumer_secret: 'random', token: 'random', token_secret: 'random'};
var config = optional('./config.json') || optConfig;
var should = require('should');

describe('Twitter.Search Functions:', function () {
  describe('Search loading', function () {
    it('should create the Object', function () {
      var search = new Twitter.Search(config);

      search.should.be.an.instanceOf(Object);
    });
  });

  describe('Search.query()', function () {
    var search = new Twitter.Search(config);

    it('should return an error about missing q in params', function (done) {
      search.query({}, function (err) {
        should.exist(err);

        done();
      });
    });

  });
});
