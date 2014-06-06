/** @jsx React.DOM */

var Button = require('../shared/button');

var ShiftCardFocusButton = React.createClass({
  render: function() {
    return (
      <Button action="cardEntry:changeFocus" args={[this.props.card]}
              content={this.props.content} className="shift-focus" />
    );
  }
});

module.exports = ShiftCardFocusButton;
