var _ = require('underscore');

var Store = require('./store'),
    Card = require('../models/card');

var DeckStore = new Store({
  initialize: function() {
    this.deck = {};
  },

  dispatches: {
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
    }
  }
});

module.exports = DeckStore;
