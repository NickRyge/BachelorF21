const {createServer} = require('http');
const url = require("url");
var express = require('express');
var app = express();
const cors = require('cors');

app.use(express.json(), cors());

let AIDS = [];

function sortArray(arr) {
	return arr.sort((a, b) => {return b.score - a.score})
}

app.get('/', (request,response) => {
	console.log("/");
	response.json(AIDS);
	response.end();
});


app.post('/', (request,response) => {
	request.accepts('application/json');
	
	if(request.body != undefined && request.body.score > 0) {
		console.log(AIDS.length, AIDS[9]);
		if (AIDS.length < 10) {
			AIDS.push(request.body);
			sortArray(AIDS);
			console.log(AIDS)
			response.writeHead(201, {"Content-Type": "text/html"});
			response.end();

		
		} else if(AIDS.length == 10 && AIDS[9].score < request.body.score) {
			console.log("skrr");
			AIDS[9] = request.body;
			sortArray(AIDS);
			response.writeHead(201, {"Content-Type": "text/html"});
			response.end();
		
		} else {
		
		response.writeHead(400, {"Content-Type": "text/html"});
		response.end();
		
		}
		
	} else {	
	
	response.writeHead(400, {"Content-Type": "text/html"});
	response.end();
	}
});

app.listen(8080);