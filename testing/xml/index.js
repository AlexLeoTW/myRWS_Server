var parseString = require('xml2js').parseString;
var fs = require('fs');

fs.readFile('freeway.kml', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
