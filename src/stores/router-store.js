var Store = require('./store'),
    Dispatcher = require('../dispatcher');

var RouterStore = new Store({
  initialize: function() {
    window.onpopstate = function() {
      Dispatcher.send('pathChanged', [this.pathSegments()]);
      this.trigger();
    }.bind(this);

    // Some browsers fire a popstate on page load, some don't.  Store functions
    // should be idempotent, so sending this twice shouldn't be a problem.
    Dispatcher.send('pathChanged', [this.pathSegments()]);
  },

  pathSegments: function() {
    return window.location.pathname.substring(1).split('/');
  },

  dispatches: {
    'deck:new': function() {
      window.history.pushState({}, '', '/');
      this.trigger();
    },
    'deck:edit': function() {
      window.history.pushState({}, '', '/');
      this.trigger();
    },
    'deck:saved': function(id) {
      window.history.pushState({}, '', '/deck/' + id);
      this.trigger();
    }
  }
});

module.exports = RouterStore;
