/** @jsx React.DOM */

var React = require('react');

var DeckViewer = require('../deck/deck-viewer'),
    Toolbar = require('../shared/toolbar'),
    NewDeckOptions = require('../shared/new-deck-options');

var DeckViewPage = React.createClass({
  render: function() {
    var toolbarContents = [
      <NewDeckOptions />
    ];

    return (
      <div className="deck-view-page">
        <Toolbar contents={toolbarContents} />
        <DeckViewer readOnly={true} />
      </div>
    );
  }
});

module.exports = DeckViewPage;
