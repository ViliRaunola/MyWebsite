var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.static(path.resolve("..", "client", "build"))); //Telling the server where to find the front end files to serve
app.get("*", (req, res) => {
    res.sendFile(path.resolve("..", "client", "build", "index.html")) //All other requests that are not for the server's router are sent to react that will handel them
});

module.exports = app;
