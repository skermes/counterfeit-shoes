/** @jsx React.DOM */

var Dispatcher = require('../dispatcher'),
    Button = require('../shared/button');

CardNameInput = React.createClass({
  render: function() {
    var onchange = _.debounce(this._onChange, 700);
    return (
      <input type="text" onChange={onchange} placeholder="search">
        <Button content={"\u00D7"} className="clear-search" action="search:clear"
                onClick={this._clearText} />
      </input>
    );
  },

  _onChange: function(event) {
    // For some reason debouncing fucks up the event argument.  The only
    // reference to this I could find was
    // http://stackoverflow.com/questions/23123138/perform-debounce-in-react-js
    var text = this.getDOMNode().value;
    Dispatcher.send('card:search', [text]);
  },
  _clearText: function() {
    this.getDOMNode().value = '';
  }
});

module.exports = CardNameInput;
