"use strict";
exports.__esModule = true;
var sharp_1 = require("sharp");
var newPayload = (function (file) {
    sharp_1["default"].resize({
        width: 200,
        height: 200,
        fit: sharp_1["default"].fit.cover,
        postion: sharp_1["default"].gravity.center
    });
    return (sharp_1["default"].code(200),
        sharp_1["default"].type('image/png'),
        sharp_1["default"].send(newPayload));
});
exports["default"] = { newPayload: newPayload };
