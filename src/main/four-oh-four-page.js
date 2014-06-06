/** @jsx React.DOM */

var React = require('react');

var Button = require('../shared/button');

var FourOhFourPage = React.createClass({
  render: function() {
    return (
      <div className="four-oh-four-page">
        <p>
          There's nothing here.  Yeesh.  That's, uh, kinda embarassing actually.
          Well, since you're already here, why don't you go ahead and
        </p>

        <Button action="deck:new" content="build a new deck" />
      </div>
    );
  }
});

module.exports = FourOhFourPage;
