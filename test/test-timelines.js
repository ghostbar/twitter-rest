/* global describe */
/* global it */
'use strict';

var Twitter = require('../index');
var optional = require('optional');
var optConfig = {consumer_key: 'random', consumer_secret: 'random', token: 'random', token_secret: 'random'};
var config = optional('./config.json') || optConfig;
var should = require('should');

describe('Twitter.Timelines Functions:', function () {

  describe('Timelines loading', function () {
    it('should create the Object', function () {
      var timelines = new Twitter.Timelines(config);

      should.exist(timelines.mentions);

      timelines.should.be.an.instanceOf(Object);
    });
  });

  describe('Timelines.user()', function () {
    it('should return an error for missing screen_name', function (done) {
      var timelines = new Twitter.Timelines(config);
      var params = { count: 1 };

      timelines.user(params, function (err) {
        should.exist(err);

        done();
      });
    });
  });

});
