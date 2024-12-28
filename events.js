const http = require('http');
const url = require('url');
var uc = require('upper-case');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var nodemailer = require('nodemailer');

var myEventHandler = function() {
    console.log("This is the data to show");
}

eventEmitter.on('data',myEventHandler);

eventEmitter.emit('data');