/** @jsx React.DOM */

var Button = require('../shared/button');

var AddCardButton = React.createClass({
  render: function() {
    return (
      <Button action="deck:addCard" content={"+" + this.props.quantity}
              args={[this.props.card, this.props.quantity]} />
    );
  }
});

module.exports = AddCardButton;
