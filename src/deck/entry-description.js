/** @jsx React.DOM */

var EntryDescription = React.createClass({
  render: function() {
    return (
      <span className="entry-description">
        {this.props.name}
        <span className="quantity">
          ({this.props.quantity})
        </span>
      </span>
    );
  }
});

module.exports = EntryDescription;
