var Twitter = require('../index'),
    config = require('./config.json'),
    should = require('should');

describe('Twitter.Search Functions:', function() {
  describe('Search loading', function() {
    it('should create the Object', function() {
      var search = new Twitter.Search(config);

      search.should.be.an.instanceOf(Object);
    });
  });

  describe('Search.query()', function() {
    var search = new Twitter.Search(config);

    it('should return an error about missing q in params', function(done) {
      search.query({}, function(err, response) {
        should.exist(err);

        done();
      });
    });

    it('should return an Object with statuses', function(done) {
      search.query({q: 'hola', count: 2}, function(err, response) {
        should.not.exist(err);

        should.exist(response.statuses);

        response.statuses.should.be.an.instanceOf(Array);

        done();
      });
    });
  });
});
