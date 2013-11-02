var Search,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

/**
 *  Module: Search
 *  ==============
 *
 *  Convenience method for searchs
 **/
module.exports = Search = (function() {

  /**
   *  <a name='constructor'></a>
   *  Constructor
   *  -----------
   **/
  function Search(uri, opts) {
    this.uri = uri;
    this.opts = opts;

    var tt = require('twitter-rest-lite');

    this.api = tt.API(this.opts);

    // bindings
    this.query = __bind(this.query, this);
  };

  /**
   *  <a name='query'></a>
   *  Public: do a tweets query
   *  -------------------------
   *
   *  params              - Object with params:
   *  - q: [Required]
   *  callback            - Callback Function
   **/
  Search.prototype.query = function(params, callback) {
    var self = this;

    if (params.q == null) {
      return callback(new Error(
        'Twitter:Search.query() requires q to be defined in the params'
      ));
    }

    self.api.get('/search/tweets.json', params, callback);
  };

  return Search;
})();
