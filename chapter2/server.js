const
  http = require('http');
  fs = require('fs');
  path = require('path');
  mime = require('mime');

let
  cache = {};

function send404(response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write('Error 404: resource not found.');
  response.end();
}

function sendFile(response, filePath, fileContents) {
  response.writeHead(
    200,
    {'content-type': mime.lookup(path.basename(filePath))}
  );
  response.end(fileContents);
}
