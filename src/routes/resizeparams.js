"use strict";
exports.__esModule = true;
var express = require("express");
var sharp_1 = require("../utilities/sharp");
var routes = express.Router();
routes.get('/ImageProcessor', sharp_1["default"], function (req, res) {
    res.sendFile('/Users/brittanysalas/Documents/ImageProessingAPI/assets/treelady.png');
});
exports["default"] = routes;
