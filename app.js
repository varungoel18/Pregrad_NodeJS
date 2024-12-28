const http = require('http');
const url = require('url');
var uc = require('upper-case');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var nodemailer = require('nodemailer');

const port = 3000;

const server = http.createServer((req , res) => {
    // fs.readFile('demo.html', function(err,data) {
        // res.statusCode = 200;
        // res.write(data);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('The document is running on' + `${port}`);
    } ).listen(8080);
    
