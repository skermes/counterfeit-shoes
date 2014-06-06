/** @jsx React.DOM */

var React = require('react');

var Button = require('../shared/button');

var CloseCardDetailsButton = React.createClass({
  render: function() {
    return (
      <Button action="cardEntry:unFocus" content={"\u00D7"} className="close" />
    );
  }
});

module.exports = CloseCardDetailsButton;
