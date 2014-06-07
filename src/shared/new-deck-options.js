/** @jsx React.DOM */

var React = require('react');

var Button = require('./button');

var NewDeckOptions = React.createClass({
  render: function() {
    return (
      <span className="new-deck-options">
        <span>Make new deck</span>
        <Button action="deck:edit" content="based on this deck" />
        <Button action="deck:new" content="from scratch" />
      </span>
    );
  }
});

module.exports = NewDeckOptions;
