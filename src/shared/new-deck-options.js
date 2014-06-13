/** @jsx React.DOM */

var React = require('react');

var Button = require('./button');

var NewDeckOptions = React.createClass({
  render: function() {
    return (
      <span className="new-deck-options">
        <span>Make new deck</span>
        <Button action="deck:edit">
          based on this deck
        </Button>
        <Button action="deck:new">
          from scratch
        </Button>
      </span>
    );
  }
});

module.exports = NewDeckOptions;
