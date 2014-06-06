/** @jsx React.DOM */

var AddCardButton = require('./add-card-button');

var AddCardToDeck = React.createClass({
  render: function() {
    return (
      <span>
        <AddCardButton card={this.props.card} quantity={1} />
        <AddCardButton card={this.props.card} quantity={2} />
        <AddCardButton card={this.props.card} quantity={3} />
      </span>
    );
  }
});

module.exports = AddCardToDeck;
