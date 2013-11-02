var Twitter = require('../index'),
    config = require('./config.json'),
    should = require('should');

describe('Twitter.Timelines Functions:', function() {
  describe('Timelines loading', function() {
    it('should create the Object', function() {
      var timelines = new Twitter.Timelines(config);

      timelines.should.be.an.instanceOf(Object);
    });
  });

  describe('Timelines.mentions()', function() {
    it('should be implemented, not yet', function() {
      console.log('TODO: TO BE IMPLEMENTED!');
    });
  });

  describe('Timelines.user()', function() {
    it('should request an user timeline', function(done) {
      var timelines = new Twitter.Timelines(config),
          params = {
            screen_name: 'ghostbar',
            count: 1
          };

      timelines.user(params, function(err, response) {
        should.not.exist(err);

        should.exist(response);

        done();
      });
    });
  });

  describe('Timelines.home()', function() {
    it('should be implemented, not yet', function() {
      console.log('TODO: TO BE IMPLEMENTED!');
    });
  });

  describe('Timelines.retweets()', function() {
    it('should be implemented, not yet', function() {
      console.log('TODO: TO BE IMPLEMENTED!');
    });
  });
});
