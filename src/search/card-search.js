/** @jsx React.DOM */

var CardNameInput = require('./card-name-input');
var CardSearchResult = require('./card-search-result');

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
