"use strict";
exports.__esModule = true;
var express = require("express");
var resizeparams_1 = require("./routes/resizeparams");
var app = express();
var port = 3000;
//define route handler ImageProcessor, sendFile from local machine
app.use('/ImageProcessor', resizeparams_1["default"]);
// start the Express server
app.listen(port, function () {
    console.log('server started at http://localhost:${port}');
});
