/** @jsx React.DOM */

var React = require('react');

var EntryDescription = require('./entry-description'),
    EntryPortrait = require('./entry-portrait'),
    RemoveCard = require('./remove-card');

var CardEntry = React.createClass({
  render: function() {
    var removeCard = undefined;
    if (!this.props.readOnly) {
      removeCard = <RemoveCard card={this.props.card}
                               quantity={this.props.quantity} />;
    }

    return (
      <span className="card-entry">
        <EntryPortrait quantity={this.props.quantity}
                       card={this.props.card} />
        <EntryDescription name={this.props.card.name}
                          quantity={this.props.quantity} />
        {removeCard}
      </span>
    );
  }
});

module.exports = CardEntry;
