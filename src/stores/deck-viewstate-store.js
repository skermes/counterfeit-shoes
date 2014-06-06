var Store = require('./store');

var DeckViewStateStore = new Store({
  initialize: function() {
    this.focusedCard = undefined;
  },

  dispatches: {
    'cardEntry:changeFocus': function(card) {
      if (!this.focusedCard || this.focusedCard.key !== card.key) {
        this.focusedCard = card;
      } else {
        this.focusedCard = undefined;
      }

      this.trigger();
    },
    'cardEntry:unFocus': function() {
      this.focusedCard = undefined;
      this.trigger();
    }
  }
});

module.exports = DeckViewStateStore;
