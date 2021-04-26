const {createServer} = require('http');
const url = require("url");
var express = require('express');
var app = express();
const cors = require('cors');
const Client = require('kubernetes-client').Client
const config = require('kubernetes-client/backends/request').config

app.use(express.json(), cors());


async function main () {
  try {
    
    const Request = require('kubernetes-client/backends/request')
    const client = new Client({version: '1.13' })

    //
    // Fetch all the pods
    const pods = await client.api.v1.pods.get()
    pods.body.items.forEach((item) => {
      console.log(item.metadata)
    })

    //
    // Fetch the Deployment from the kube-system namespace.
    //
    const deployment = await client.apis.apps.v1.namespaces('default').deployments().get()
    deployment.body.items.forEach((item) => {
      console.log(item.metadata)
    })
  } catch (err) {
    console.error('Error: ', err)
  }
}

app.get('/', (request,response) => {
	console.log("get request");
	response.json(AIDS);
	response.end();
});
main()
app.listen(7000);