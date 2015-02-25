/**
 * Module dependencies.
 */

var express = require('express'),
	path = require('path'),
	
	serveStatic = require('serve-static');

var app = express();
var pub = path.join(__dirname, 'public');



// static resource folder
app.use(serveStatic(pub));

var port = 3000;
app.listen(port, function(){
  console.log('Pro1 GO - ' + port);
});