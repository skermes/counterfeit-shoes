/** @jsx React.DOM */

var React = require('react');

var Button = require('../shared/button');

var RemoveCardButton = React.createClass({
  render: function() {
    return (
      <Button action="deck:removeCard"
              args={[this.props.card, this.props.quantity]}>
        -{this.props.quantity}
      </Button>
    );
  }
});

module.exports = RemoveCardButton;
