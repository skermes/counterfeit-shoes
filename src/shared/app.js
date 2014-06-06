/** @jsx React.DOM */

var Toolbar = require('../toolbar/toolbar'),
    DeckViewer = require('../deck/deck-viewer');

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Toolbar />
        <DeckViewer />
      </div>
    );
  }
});

module.exports = App;
