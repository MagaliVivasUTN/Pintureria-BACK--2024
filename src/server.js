"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var pintureriaRoutes_1 = require("./routes/pintureriaRoutes");
var app = (0, express_1.default)();
var port = 3000;
app.use(body_parser_1.default.json());
app.use('/api', pintureriaRoutes_1.default);
app.listen(port, function () {
    console.log("Servidor corriendo en http://localhost:".concat(port));
});
