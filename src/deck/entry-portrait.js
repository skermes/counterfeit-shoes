/** @jsx React.DOM */

var Dispatcher = require('../dispatcher');

var EntryPortrait = React.createClass({
  render: function() {
    var layerCount = Math.min(3, this.props.quantity);
    var style = {backgroundImage: "url(" + this.props.card.portraitUrl + ");"};
    return (
      <div className={"card-image-" + layerCount} style={style}
           onClick={this._onClick} />
    );
  },

  _onClick: function() {
    Dispatcher.send('cardEntry:changeFocus', [this.props.card]);
  }
});

module.exports = EntryPortrait;
