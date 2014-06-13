/** @jsx React.DOM */

var React = require('react');

var Button = require('../shared/button');

var AddCardButton = React.createClass({
  render: function() {
    return (
      <Button action="deck:addCard"
              args={[this.props.card, this.props.quantity]}>
        {"+" + this.props.quantity}
      </Button>
    );
  }
});

module.exports = AddCardButton;
