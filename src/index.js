"use strict";
exports.__esModule = true;
var express_1 = require("express");
var resizeparams_1 = require("./src/routes/resizeparams");
var app = (0, express_1["default"])();
var port = 3000;
//define route handler ImageProcessor, sendFile from local machine
app.use('/ImageProessingAPI', resizeparams_1["default"]);
// start the Express server
app.listen(port, function () {
    console.log('server started at http://localhost:${port}');
});
