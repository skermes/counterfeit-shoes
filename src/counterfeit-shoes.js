/** @jsx React.DOM */

var React = require('react');

var App = require('./main/app');

document.addEventListener('DOMContentLoaded', function() {
  React.renderComponent(<App />,
                        document.getElementById('root'))
});

// Enables the React dev tools.
window.React = React;
