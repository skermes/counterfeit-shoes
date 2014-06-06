/** @jsx React.DOM */

var SearchResultStore = require('../stores/search-result-store'),
    AddCardToDeck = require('./add-card-to-deck');

var characterForSearchStatus = {
  'none': '',
  'inProgress': '*',
  'succeeded': '',
  'failed': '\u00D7'
};

var classForSearchStatus = {
  'none': 'none',
  'inProgress': 'in-progress',
  'succeeded': 'succeeded',
  'failed': 'failed'
};

var CardSearchResult = React.createClass({
  getInitialState: function() {
    return {searchStatus: SearchResultStore.searchStatus};
  },
  componentDidMount: function() {
    SearchResultStore.listen(this._onChange);
  },
  componentWillUnmount: function() {
    SearchResultStore.ignore(this._onChange);
  },
  render: function() {
    var character = characterForSearchStatus[this.state.searchStatus];
    var className = classForSearchStatus[this.state.searchStatus];

    var addCard = this.state.searchStatus === 'succeeded' ?
                  <AddCardToDeck card={SearchResultStore.card} /> :
                  undefined;
    return (
      <span className={className}>
        {character}
        {addCard}
      </span>
    );
  },

  _onChange: function() {
    this.setState({searchStatus: SearchResultStore.searchStatus});
  }
});

module.exports = CardSearchResult;
