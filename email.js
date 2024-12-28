const http = require('http');
const url = require('url');
var uc = require('upper-case');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user:'varun.varungoel.goel@gmail.com',
        pass: 'abcd'
    }
});

var mailOptions = {
    from: 'varun.varungoel.goel@gmail.com',
    to: 'ansh.shinde@gmail.com , mahender@gmail.com , atharva@gmail.com',
    subject:'Sending email for tets purpose',
    text : 'Hi ansh you are getting email from Varun Goel'
};

transporter.sendMail(mailOptions,function(error,info) {
    if(error){
        console.log(error);
    }
    else {
        console.log('Email sent : ' + info.response);
    }
});