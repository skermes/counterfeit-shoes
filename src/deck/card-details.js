/** @jsx React.DOM */

var CloseCardDetailsButton = require('./close-card-details-button'),
    ShiftCardFocusButton = require('./shift-card-focus-button');

var CardDetails = React.createClass({
  render: function() {
    var arrowPosition = {
      left: this.props.arrowLeft
    };

    var prevButton = undefined;
    if (this.props.prevCard) {
      prevButton = <ShiftCardFocusButton card={this.props.prevCard} content="<" />;
    }

    var nextButton = undefined;
    if (this.props.nextCard) {
      var nextButton = <ShiftCardFocusButton card={this.props.nextCard} content=">" />;
    }

    return (
      <div className="entry-details">
        <div className="pointer" style={arrowPosition} />
        <CloseCardDetailsButton />
        {prevButton}
        <div className="scroller">
          <img src={this.props.url} />
        </div>
        {nextButton}
      </div>
    );
  }
});

module.exports = CardDetails;
