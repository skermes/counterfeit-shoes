/** @jsx React.DOM */

var React = require('react');

var Button = require('../shared/button');

var ShiftCardFocusButton = React.createClass({
  render: function() {
    return (
      <Button action="cardEntry:changeFocus" args={[this.props.card]}
              className="shift-focus">
        {this.props.children}
      </Button>
    );
  }
});

module.exports = ShiftCardFocusButton;
