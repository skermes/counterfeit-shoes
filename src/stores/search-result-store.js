var Store = require('./store'),
    Dispatcher = require('../dispatcher'),
    Card = require('../models/card');

var SearchResultStore = new Store({
  initialize: function() {
    this.searchStatus = 'none';
  },

  dispatches: {
    'card:search': function(text) {
      if (text.trim() === '') {
        Dispatcher.send('search:clear');
        return;
      }

      var card = Card(text);

      // Since I can't make a CORS request directly, we can go in through the
      // backdoor with an image tag.
      var img = new Image();
      img.onload = function() {
        Dispatcher.send('search:success', [card]);
      };
      img.onerror = function() {
        Dispatcher.send('search:failure');
      };

      Dispatcher.send('search:inProgress');
      // Setting the src property kicks off trying to load the image.  Yay side
      // effects in properties!
      img.src = card.portraitUrl;
    },

    'search:clear': function() {
      this.searchStatus = 'none';
      this.trigger();
    },
    'search:inProgress': function() {
      this.searchStatus = 'inProgress';
      this.trigger();
    },
    'search:success': function(card) {
      this.searchStatus = 'succeeded';
      this.card = card;
      this.trigger();
    },
    'search:failure': function() {
      this.searchStatus = 'failed';
      this.trigger();
    }
  }
});

module.exports = SearchResultStore;
