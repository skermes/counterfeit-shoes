/** @jsx React.DOM */

var React = require('react');

var CardNameInput = require('./card-name-input'),
    CardSearchResult = require('./card-search-result');

var CardSearch = React.createClass({
  render: function() {
    return (
      <div className="search">
        <CardNameInput />
        <CardSearchResult />
      </div>
    );
  }
});

module.exports = CardSearch;
