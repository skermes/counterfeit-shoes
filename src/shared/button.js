/** @jsx React.DOM */

var Dispatcher = require('../dispatcher');

var Button = React.createClass({
  render: function() {
    return (
      <button onClick={this._click} className={this.props.className}>
        {this.props.content}
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
