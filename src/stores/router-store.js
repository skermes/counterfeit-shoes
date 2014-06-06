var Store = require('./store');

var RouterStore = new Store({
  initialize: function() {
    window.onpopstate = function() {
      this.trigger();
    }.bind(this);
  },

  pathSegments: function() {
    return window.location.pathname.substring(1).split('/');
  },

  dispatches: {
    'deck:new': function() {
      window.history.pushState({}, '', '/');
      this.trigger();
    }
  }
});

module.exports = RouterStore;
