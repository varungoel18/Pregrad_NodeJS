const http = require('http');
const url = require('url');
var uc = require('upper-case');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var nodemailer = require('nodemailer');

// append to file
fs.appendFile('demo.txt' ,'I am adding data to it' , function (err) {
    if(err) throw err;
    console.log('Saved!');
} );

// open file
fs.open('demo.txt', 'w', function(err,file){
    if(err) throw err;
    console.log('saved');
});

// write to file
fs.writeFile('demo.txt','Hi there welcome you all of you',function(err) {
    if(err) throw err;
    console.log('Saved!');
});

// delete file
fs.unlink('demo.txt',function(err) {
    if(err) throw err;
    console.log('File deleted');
});

// rename file
fs.rename('test.txt' , 'mynewfile.txt' , function (err) {
    if(err) throw err;
    console.log('File renamed');
});
