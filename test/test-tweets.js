/* global it */
/* global describe */
'use strict';

var Twitter = require('../index');
var config = require('./config.json');
var should = require('should');

describe('Twitter.Tweets Functions:', function() {
  describe('Tweets loading', function() {
    it('should create the Object', function() {
      var tweets = new Twitter.Tweets(config);

      tweets.should.be.an.instanceOf(Object);
    });
  });

  describe('Tweets.retweets()', function() {
    var tweets = new Twitter.Tweets(config);
    var params = {
      count: 1
    };

    it('should return an error about missing id', function(done) {
      tweets.retweets(null, params, function(err, response) {
        should.exist(err);

        done();
      });
    });

  });

  describe('Tweets.show()', function() {
    var tweets = new Twitter.Tweets(config);

    it('should return an error about missing id', function(done) {
      tweets.show(null, null, function(err, response) {
        should.exist(err);

        done();
      });
    });

  });

  describe('Tweets.destroy()', function() {
    var tweets = new Twitter.Tweets(config);

    it('should return an error about missing id', function(done) {
      tweets.destroy(null, null, function(err, response) {
        should.exist(err);

        done();
      });
    });

  });

  describe('Tweets.update()', function() {
    var tweets = new Twitter.Tweets(config);

    it('should return an error about missing status on params', function(done) {
      tweets.update({}, function(err, response) {
        should.exist(err);

        done();
      });
    });

    it('should return an error about too much characters', function(done) {
      tweets.update({
        status: 'Stupidly long status so this fails, I hope this is enough because I\'m actually not counting how much characters I\'m writing. I\'m gonna make it extra-longh just to be sure althought it should be just 141 so ... Anyway, this should work.'
      }, function(err) {
        should.exist(err);

        done();
      });
    });

  });

  describe('Tweets.retweet()', function() {
    var tweets = new Twitter.Tweets(config);

    it('should return an error about missing id', function(done) {
      tweets.retweet(null, null, function(err) {
        should.exist(err);

        done();
      });
    });

    it('Success call should be implemented, not yet', function() {
      console.log('TODO: TO BE IMPLEMENTED!');
    });
  });

  describe('Tweets.updateWithMedia()', function() {
    it('should be implemented, but not yet', function() {
      console.log('Check Issue #1');
    });
  });

  describe('Tweets.oembed()', function() {
    var tweets = new Twitter.Tweets(config);

    it('should return an error related to missing url or id', function(done) {
      tweets.oembed({}, function(err) {
        should.exist(err);

        done();
      });
    });

  });

  describe('Tweets.retweeters()', function() {
    var tweets = new Twitter.Tweets(config);

    it('should return an error about missing id', function(done) {
      tweets.retweeters({}, function(err) {
        should.exist(err);

        done();
      });
    });

  });

});
