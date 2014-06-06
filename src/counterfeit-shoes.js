/** @jsx React.DOM */

var App = require('./shared/app');

document.addEventListener('DOMContentLoaded', function() {
  React.renderComponent(<App />,
                        document.getElementById('root'))
});
