/** @jsx React.DOM */

var React = require('react');

var Dispatcher = require('../dispatcher');

var Button = React.createClass({
  render: function() {
    return (
      <button onClick={this._click} className={this.props.className}>
        {this.props.children}
      </button>
    );
  },

  _click: function(event) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    Dispatcher.send(this.props.action, this.props.args);
  }
});

module.exports = Button;
