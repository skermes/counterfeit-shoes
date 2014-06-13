/** @jsx React.DOM */

var React = require('react');

var Button = require('../shared/button');

var CloseCardDetailsButton = React.createClass({
  render: function() {
    return (
      <Button action="cardEntry:unFocus" className="close">
        {"\u00D7"}
      </Button>
    );
  }
});

module.exports = CloseCardDetailsButton;
