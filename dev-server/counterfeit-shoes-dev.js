var fs = require('fs'),
    express = require('express');

var _ = require('underscore');

var counterfeitShoesDev = express();
counterfeitShoesDev.use(express.static('dist'));
counterfeitShoesDev.get(/.*/, function(req, res) {
  // For some reason res.sendFile doesn't exist (thanks, express).
  fs.readFile('dist/404.html', function(err, data) {
    res.end(data);
  });
});
counterfeitShoesDev.listen(3000);
