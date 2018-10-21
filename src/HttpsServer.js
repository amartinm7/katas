var https = require('https');
var url = require('URL');

https.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);



http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.URL, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);
