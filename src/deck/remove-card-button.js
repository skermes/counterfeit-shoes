/** @jsx React.DOM */

var React = require('react');

var Button = require('../shared/button');

var RemoveCardButton = React.createClass({
  render: function() {
    return (
      <Button action="deck:removeCard"
              args={[this.props.card, this.props.quantity]}
              content={'-' + this.props.quantity} />
    );
  }
});

module.exports = RemoveCardButton;
