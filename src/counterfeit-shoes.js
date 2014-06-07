/** @jsx React.DOM */

var React = require('react');

var App = require('./main/app'),
    Dispatcher = require('./dispatcher');

document.addEventListener('DOMContentLoaded', function() {
  Dispatcher.send('app:start');
  React.renderComponent(<App />,
                        document.getElementById('root'));
});

// Enables the React dev tools.
window.React = React;
