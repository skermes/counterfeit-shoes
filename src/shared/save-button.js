/** @jsx React.DOM */

var React = require('react');

var Button = require('../shared/button');

var SaveButton = React.createClass({
  render: function() {
    return (
      <Button action="deck:save" className="save-button">
        save
      </Button>
    );
  }
});

module.exports = SaveButton;
