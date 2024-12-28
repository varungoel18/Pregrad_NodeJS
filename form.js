const http = require('http');
const url = require('url');
var uc = require('upper-case');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var nodemailer = require('nodemailer');
http.createServer(function(req,res) {
    res.writeHead(200 , {'Content-Type' : 'text/html'});
    res.write('<form action="#" method="post" >');
    res.write('<input type="file" name="filetoupload"><br>' );
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
}).listen(8080);


