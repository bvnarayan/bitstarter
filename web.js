var express = require('express');
var fs = require('fs');


var buf = new Buffer (fs.readFileSync('index.html'))
var out = buf.toString()

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(out);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
