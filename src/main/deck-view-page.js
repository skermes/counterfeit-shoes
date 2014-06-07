/** @jsx React.DOM */

var React = require('react');

var DeckViewer = require('../deck/deck-viewer'),
    Toolbar = require('../shared/toolbar');

var DeckViewPage = React.createClass({
  render: function() {
    return (
      <div className="deck-view-page">
        <Toolbar />
        <DeckViewer readOnly={true} />
      </div>
    );
  }
});

module.exports = DeckViewPage;
