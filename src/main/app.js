/** @jsx React.DOM */

var React = require('react');

var RouterStore = require('../stores/router-store'),
    FourOhFourPage = require('./four-oh-four-page'),
    EditPage = require('./edit-page'),
    DeckViewPage = require('./deck-view-page');

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
    var page = <FourOhFourPage />;
    if (this.state.pathSegments[0] === '') {
      page = <EditPage />;
    } else if (this.state.pathSegments[0] === 'deck') {
      page = <DeckViewPage />;
    }

    return (
      <div className="container">
        {page}
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
