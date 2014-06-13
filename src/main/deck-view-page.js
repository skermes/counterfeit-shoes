/** @jsx React.DOM */

var React = require('react');

var DeckViewer = require('../deck/deck-viewer'),
    Toolbar = require('../shared/toolbar'),
    NewDeckOptions = require('../shared/new-deck-options');

var DeckViewPage = React.createClass({
  render: function() {
    return (
      <div className="deck-view-page">
        <Toolbar>
          <NewDeckOptions />
        </Toolbar>
        <DeckViewer readOnly={true} />
      </div>
    );
  }
});

module.exports = DeckViewPage;
