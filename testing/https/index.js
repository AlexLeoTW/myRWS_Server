var https = require('https');
var fs = require('fs');
var debug = require('debug')('Dev:server');

var options= {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

var httpsServer = https.createServer(options, function(req, res) {
  res.writeHead(200);
  res.end('hello world\n');
});

httpsServer.listen(8000);

httpsServer.on('listening', onListening);

function onListening() {
  var addr = httpsServer.address();
  var bind = typeof addr === 'string' ?
    'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

console.log('Reach the end of file!!!');
