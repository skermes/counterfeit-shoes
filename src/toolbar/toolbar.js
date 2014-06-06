/** @jsx React.DOM */

var CardSearch = require('../search/card-search'),
    SaveButton = require('./save-button'),
    Logo = require('./logo');

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
