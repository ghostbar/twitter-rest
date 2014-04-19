/* global describe */
/* global it */
'use strict';

var Twitter = require('../index');
var config = require('./config.json');
var should = require('should');

describe('Twitter.Tweets Functions:', function () {

  describe('Tweets.retweets()', function () {
    var tweets = new Twitter.Tweets(config),
        params = {
          count: 1
        };

    it('should return one of the collection of retweets on an status', function (done) {

      tweets.retweets('394732926832623616', params, function (err, response) {
        should.not.exist(err);

        should.exist(response);

        done();
      });
    });
  });

  describe('Tweets.show()', function () {
    var tweets = new Twitter.Tweets(config);

    it('should return a single tweet', function (done) {
      tweets.show('394732926832623616', null, function (err, response) {
        should.not.exist(err);

        should.exist(response);

        done();
      });
    });
  });

  describe('Tweets.destroy()', function () {
    var tweets = new Twitter.Tweets(config);

    it('Success call should be implemented, not yet', function () {
      // FIXME: How should this be implemented without destroying an useful tweet?
      console.log('TODO: TO BE IMPLEMENTED!');
    });
  });

  describe('Tweets.update()', function () {
    var tweets = new Twitter.Tweets(config);

    it('Should send a tweet', function (done) {
      this.timeout(40000);

      var params = {
        status: '123... This is a test'
      };

      tweets.update(params, function (err, response) {
        should.not.exist(err);

        should.exist(response);

        should.exist(response.id);

        done();
      });

    });
  });

  describe('Tweets.retweet()', function () {
    it('Success call should be implemented, not yet', function () {
      // FIXME: how to implement this?
      console.log('TODO: TO BE IMPLEMENTED!');
    });
  });

  describe('Tweets.updateWithMedia()', function () {
    it('should be implemented, but not yet', function () {
      console.log('Check Issue #1');
    });
  });

  describe('Tweets.oembed()', function () {
    var tweets = new Twitter.Tweets(config);

    it('should return an html', function (done) {
      var params = {
        id: '394732926832623616'
      };

      tweets.oembed(params, function (err, response) {
        should.not.exist(err);
        
        should.exist(response.html);

        done();
      });
    });
  });

  describe('Tweets.retweeters()', function () {
    var tweets = new Twitter.Tweets(config);

    it('should return a list of ids', function (done) {
      var params = {
        id: '394732926832623616',
        count: 1
      };

      tweets.retweeters(params, function(err, response) {
        should.not.exist(err);

        should.exist(response.ids);

        done();
      });
    });
  });

});
