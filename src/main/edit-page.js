/** @jsx React.DOM */

var React = require('react');

var Toolbar = require('../shared/toolbar'),
    SaveButton = require('../shared/save-button'),
    CardSearch = require('../search/card-search'),
    DeckViewer = require('../deck/deck-viewer');

var EditPage = React.createClass({
  render: function() {
    return (
      <div className="edit-page">
        <Toolbar>
          <CardSearch />
          <SaveButton />
        </Toolbar>
        <DeckViewer readOnly={false} />
      </div>
    );
  }
});

module.exports = EditPage;
