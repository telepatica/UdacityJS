"use strict";
exports.__esModule = true;
var express_1 = require("express");
var routes = express_1["default"].Router();
routes.get('/ImageProcessor', function (req, res) {
    res.sendFile('/Users/brittanysalas/Documents/ImageProessingAPI/upload/treelady.png');
});
exports["default"] = routes;
