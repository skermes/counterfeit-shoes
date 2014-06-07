var _ = require('underscore'),
    Firebase = require('firebase-client');

var Store = require('./store'),
    Card = require('../models/card'),
    Dispatcher = require('../dispatcher');

var FIREBASE_ROOT_URL = 'https://counterfeit-shoes.firebaseio.com/';
var decksRef = new Firebase(FIREBASE_ROOT_URL).child('decks');

var deckRef = undefined;

var DeckStore = new Store({
  initialize: function() {
    this.deck = {};
  },

  dispatches: {
    'deck:new': function() {
      if (deckRef) {
        deckRef.off('value');
        deckRef = undefined;
      }

      this.deck = {};
      this.trigger();
    },
    'deck:edit': function() {
      if (deckRef) {
        deckRef.off('value');
        deckRef = undefined;
      }
    },
    'deck:addCard': function(card, quantity) {
      if (_.has(this.deck, card.key)) {
        this.deck[card.key].quantity += quantity;
      } else {
        this.deck[card.key] = {card: card, quantity: quantity};
      }
      this.trigger();
    },
    'deck:removeCard': function(card, quantity) {
      if (!_.has(this.deck, card.key)) {
        return;
      }

      var entry = this.deck[card.key];
      if (entry.quantity <= quantity) {
        delete this.deck[card.key];
      } else {
        entry.quantity -= quantity;
      }

      this.trigger();
    },
    'deck:save': function() {
      deckRef = decksRef.push(this.deck);
      deckRef.on('value', function(snapshot) {
        this.deck = snapshot.val();
        this.trigger();
      }.bind(this))
      Dispatcher.send('deck:saved', [deckRef.name()]);
    },
    'pathChanged': function(segments) {
      if (segments[0] === 'deck') {
        deckRef = decksRef.child(segments[1]);
        deckRef.on('value', function(snapshot) {
          this.deck = snapshot.val();
          this.trigger();
        }.bind(this))
      }
    }
  }
});

module.exports = DeckStore;
