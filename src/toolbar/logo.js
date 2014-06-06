/** @jsx React.DOM */

var React = require('react');

var Logo = React.createClass({
  render: function() {
    return (
      <img className="logo" src="logo.png" alt="SolAnvil" />
    );
  }
});

module.exports = Logo;
