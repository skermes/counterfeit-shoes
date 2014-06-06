/** @jsx React.DOM */

var EntryDescription = require('./entry-description'),
    EntryPortrait = require('./entry-portrait'),
    RemoveCard = require('./remove-card');

var CardEntry = React.createClass({
  render: function() {
    return (
      <span className="card-entry">
        <EntryPortrait quantity={this.props.quantity}
                       card={this.props.card} />
        <EntryDescription name={this.props.card.name}
                          quantity={this.props.quantity} />
        <RemoveCard card={this.props.card} quantity={this.props.quantity} />
      </span>
    );
  }
});

module.exports = CardEntry;
