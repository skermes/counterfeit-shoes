/** @jsx React.DOM */

var React = require('react');

var Toolbar = require('../toolbar/toolbar'),
    DeckViewer = require('../deck/deck-viewer'),
    RouterStore = require('../stores/router-store');

var App = React.createClass({
  getInitialState: function() {
    return {
      pathSegments: RouterStore.pathSegments()
    };
  },
  componentDidMount: function() {
    RouterStore.listen(this._onPathChange);
  },
  componentWillUnmount: function() {
    RouterStore.ignore(this._onPathChange);
  },

  render: function() {
    return (
      <div className="container">
        <Toolbar />
        <DeckViewer />
      </div>
    );
  },

  _onPathChange: function() {
    this.setState({
      pathSegments: RouterStore.pathSegments()
    });
  }
});

module.exports = App;
