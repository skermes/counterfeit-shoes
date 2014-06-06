/** @jsx React.DOM */

var RemoveCardButton = require('./remove-card-button');

var RemoveCard = React.createClass({
  render: function() {
    var buttonCount = Math.min(3, this.props.quantity);
    var buttons = _.map(_.range(buttonCount), function(q) {
      return <RemoveCardButton card={this.props.card} quantity={q+1} />
    }, this);

    return (
      <div className="remove-card">
        {buttons}
      </div>
    );
  }
});

module.exports = RemoveCard;
