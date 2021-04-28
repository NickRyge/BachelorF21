const {createServer} = require('http');
const url = require("url");
var fs = require('fs');
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (request,response) => {

	fs.readFile("index.html", function (error, htmlRes) {
		if (error) {
			response.writeHead(400);
			response.write("Shitter's clogged, SOS");
			response.end();
		} else {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write(htmlRes);
			response.end();
		}
	});
});

app.post('/position', (request,response) => {
	response.writeHead(404, {"Content-Type": "text/html"});
	response.end();
});

app.listen(8080);