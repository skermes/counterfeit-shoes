/** @jsx React.DOM */

var React = require('react');

var Toolbar = React.createClass({
  render: function() {
    return (
      <div className="toolbar">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Toolbar;
