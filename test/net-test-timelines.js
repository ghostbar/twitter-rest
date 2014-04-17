/* global describe */
/* global it */
'use strict';

var Twitter = require('../index');
var config = require('./config.json');
var should = require('should');

describe('Twitter.Timelines Module Network Functions:', function () {
  describe('Timelines.mentions()', function () {
    it('should request mentions of the user timeline', function (done) {
      var timelines = new Twitter.Timelines(config);
      var params = {
        count: 1
      };

      timelines.mentions(params, function (err, response) {
        should.not.exist(err);

        should.exist(response);

        response.should.be.an.instanceOf(Array);

        should.exist(response[0].created_at);

        done();
      });
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

    it('should request an user timeline', function (done) {
      var timelines = new Twitter.Timelines(config);
      var params = {
        'screen_name': 'ghostbar',
        count: 1
      };

      timelines.user(params, function (err, response) {
        should.not.exist(err);

        should.exist(response);

        done();
      });
    });
  });

  describe('Timelines.home()', function () {
    it('should be implemented, not yet', function () {
      console.log('TODO: TO BE IMPLEMENTED!');
    });
  });

  describe('Timelines.retweets()', function () {
    it('should be implemented, not yet', function () {
      console.log('TODO: TO BE IMPLEMENTED!');
    });
  });
});
