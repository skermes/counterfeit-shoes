/** @jsx React.DOM */

var React = require('react');

var Toolbar = require('../toolbar/toolbar'),
    DeckViewer = require('../deck/deck-viewer');

var EditPage = React.createClass({
  render: function() {
    return (
      <div className="edit-page">
        <Toolbar />
        <DeckViewer />
      </div>
    );
  }
});

module.exports = EditPage;
