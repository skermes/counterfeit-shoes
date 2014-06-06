var Store = require('./store');

var RouterStore = new Store({
  initialize: function() {
  },

  pathSegments: function() {
    return window.location.pathname.substring(1).split('/');
  },

  dispatches: {

  }
});

module.exports = RouterStore;
