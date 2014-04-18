/* global describe */
/* global it */
'use strict';

var Twitter = require('../index');
var config = require('./config.json');
var should = require('should');

describe('Twitter.Search Module Network Functions:', function () {
  describe('Search.query()', function () {
    var search = new Twitter.Search(config);

    it('should return an Object with Statuses', function (done) {
      this.timeout(40000);

      var query = {
        q: 'hola',
        count: 2
      };

      search.query(query, function (err, response) {
        should.not.exist(err);

        should.exist(response.statuses);

        response.statuses.should.be.an.instanceOf(Array);

        done();
      });
    });
  });
});
