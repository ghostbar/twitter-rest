twitter-rest [![Code Climate](https://codeclimate.com/github/ghostbar/twitter-rest/badges/gpa.svg)](https://codeclimate.com/github/ghostbar/twitter-rest)
============

Twitter's REST library for Node.js.

Includes the core methods (API & OAuth) from [`twitter-rest-lite`](https://github.com/ghostbar/twitter-rest-lite).

Includes the convenience methods for:

- Timelines
- Tweets
- Search
- More to come...

Timelines Interface
-------------------

### Brief

    var tlib = require('twitter-rest');
    var timeline = new tlib.timelines(variableWithCredentials);
    // could use 'new tlib(variableWithCredentials)' too and use
    // twitter.timelines to access this interface.

    timeline.mentions(params, callback);
    timeline.user(params, callback);
    timeline.home(params, callback);
    timeline.retweets(params, callback);

Tweets Interface
----------------

### Brief

    var tlib = require('twitter-rest');
    var tweets = new tlib.tweets(variableWithCredentials);
    // could use 'new tlib(VariableWithCredentials)' too and use
    // twitter.tweets to access this interface.

    tweets.retweets(tweetId, params, callback); // this GETS the retweets of a tweet
    tweets.show(tweetId, params, callback);
    tweets.destroy(tweetId, params, callback);
    tweets.update(params, callback);
    tweets.retweet(tweetId, params, callback); // this MAKES a retweet to a tweet
    tweets.oembed(params, callback);
    tweets.retweeters(params, callback);

Search Interface
----------------

### Brief

    var tlib = require('twitter-rest');
    var search = new tlib.search(variableWithCredentials);
    // could use 'new tlib(variablewithcredentials)' too and use
    // twitter.search to access this interface.

    search.query(params, callback);

### Search.query

    search.query({
      q: 'search query goes here'
    }, function (err, response) {
      // do whatever you want
    });

Testing
-------

In order to run tests, first create the file `test/config.json` with the following format:

    {
      "consumer_key": "Your credential from Twitter's Developer Interface",
      "consumer_secret": "Your credential from Twitter's Developer Interface",
      "token": "Your credential from Twitter's Developer Interface",
      "token_secret": "Your credential from Twitter's Developer Interface",
      "callback": "Either your callback URL or `oob` for Desktop Apps"
    }

Now run:

    npm test

Known Issues
------------

- There's no testing for all the requests that require user context.

Quick usage guide
-----------------

    var Twitter = require('twitter-rest'),
        keys,
        tt, ttoauth, ttapi;

    keys = { consumer_key: 'blahblahblah', consumer_secret: 'blahblahblah', callback: '...' };

    tt = new Twitter(keys);

    // Just Twitter's OAuth REST interface
    ttoauth = new Twitter.OAuth(keys);

    keys['token'] = '...';
    keys['token_secret'] = '...';

    // Just Twitter's basic GET/POST interface
    ttapi = new Twitter.API(keys);


License and author
------------------
© 2013-2014, Jose Luis Rivas `<me@ghostbar.co>`. 

Licensed under the MIT terms. A copy of the license is on the file `LICENSE`.
