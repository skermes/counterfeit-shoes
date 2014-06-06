var Store = require('./store');

var Card = require('../models/card');

var DeckStore = new Store({
  initialize: function() {
    // this.deck = {};

    this.deck = {
      'sparkbot': {quantity: 3, card: Card('spark bot')},
      'ionicwarcharger': {quantity: 3, card: Card('ionic warcharger')},
      'heavyartillery': {quantity: 2, card: Card('heavy artillery')},
      'cypienbattlesuit': {quantity: 2, card: Card('cypien battlesuit')},
      'oreianbattledroid': {quantity: 2, card: Card('oreian battledroid')},
      'aetherguard': {quantity: 2, card: Card('aetherguard')},
      'matrixwarden': {quantity: 2, card: Card('matrix warden')},
      'nexuspilot': {quantity: 2, card: Card('nexus pilot')},
      'techupgrade': {quantity: 2, card: Card('tech upgrade')},
      'jetpack': {quantity: 1, card: Card('jet pack')},
      'digitize': {quantity: 1, card: Card('digitize')},
      'synapsisoracle': {quantity: 1, card: Card('synapsis oracle')},
      'munitionsdrone': {quantity: 1, card: Card('munitions drone')},
      'vaultblockade': {quantity: 1, card: Card('vault blockade')},
      'battletechtician': {quantity: 1, card: Card('battle techtician')},
      'forgeplatesentry': {quantity: 1, card: Card('forgeplate sentry')},
      'oreianjusticar': {quantity: 1, card: Card('oreian justicar')},
      'arcflightsquadron': {quantity: 1, card: Card('arcflight squadron')},
      'forgeguardianbeta': {quantity: 1, card: Card('forge guardian beta')},
    };
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
