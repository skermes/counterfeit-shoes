/** @jsx React.DOM */

var React = require('react');

var CardSearch = require('../search/card-search'),
    SaveButton = require('./save-button');

var Toolbar = React.createClass({
  render: function() {
    return (
      <div className="toolbar">
        <CardSearch />
        <SaveButton />
      </div>
    );
  }
});

module.exports = Toolbar;
