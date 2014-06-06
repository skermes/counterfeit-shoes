/** @jsx React.DOM */

var DeckStore = require('../stores/deck-store'),
    DeckViewStateStore = require('../stores/deck-viewstate-store'),
    CardEntry = require('./card-entry'),
    CardDetails = require('./card-details');

// In pixels.  Magic number pulled from FF dev tools.
var CARD_ENTRY_WIDTH = 289;

var DeckViewer = React.createClass({
  getInitialState: function() {
    return {
      deck: DeckStore.deck,
      focusedCard: DeckViewStateStore.focusedCard
    };
  },
  componentDidMount: function() {
    DeckStore.listen(this._deckChange);
    DeckViewStateStore.listen(this._viewStateChange);
  },
  componentWillUnmount: function() {
    DeckViewStateStore.ignore(this._viewStateChange);
    DeckStore.ignore(this._deckChange);
  },

  render: function() {
    if (_.keys(this.state.deck).length === 0) {
      return (
        <div className="deck">
          <div className="empty-notice">
            Search for card names above to start assembling a deck
          </div>
        </div>
      )
    }

    var entries = _.map(this.state.deck, function(entry) {
      return <CardEntry card={entry.card} quantity={entry.quantity}
                        key={entry.card.key} />
    });

    if (this.state.focusedCard) {
      var keys = _.keys(this.state.deck);
      var focusedIndex = _.indexOf(keys, this.state.focusedCard.key);

      var entriesPerRow = Math.floor(window.innerWidth / CARD_ENTRY_WIDTH);
      var focusedRow = Math.floor(focusedIndex / entriesPerRow);
      var lastIndexInFocusedRow = entriesPerRow * (focusedRow + 1);

      var arrowLeft = (focusedIndex % entriesPerRow) * CARD_ENTRY_WIDTH +
                      (CARD_ENTRY_WIDTH / 2)

      var prevEntry = this.state.deck[keys[focusedIndex - 1]];
      var prevCard = prevEntry ? prevEntry.card : undefined;
      var nextEntry = this.state.deck[keys[focusedIndex + 1]];
      var nextCard = nextEntry ? nextEntry.card : undefined;

      var details = <CardDetails url={this.state.focusedCard.combinedUrl}
                                 arrowLeft={arrowLeft} prevCard={prevCard}
                                 nextCard={nextCard} />;
      entries.splice(lastIndexInFocusedRow, 0, details);
    }

    return (
      <div className="deck">
        {entries}
      </div>
    );
  },

  _deckChange: function() {
    this.setState({
      deck: DeckStore.deck
    });
  },
  _viewStateChange: function() {
    this.setState({
      focusedCard: DeckViewStateStore.focusedCard
    });
  }
});

module.exports = DeckViewer;
