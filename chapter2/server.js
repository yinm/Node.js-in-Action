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
