"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSucursal = exports.createSucursal = void 0;
var pintureria_1 = require("../models/pintureria");
var pintureria = new pintureria_1.Pintureria("Rio Color");
var createSucursal = function (req, res) {
    var _a = req.body, direccion = _a.direccion, telefono = _a.telefono;
    var sucursal = pintureria.createSucursal(direccion, telefono);
    res.status(201).json(sucursal);
};
exports.createSucursal = createSucursal;
var getSucursal = function (req, res) {
    var id = req.params.id;
    var sucursal = pintureria.showSucursal(Number(id));
    if (sucursal) {
        res.json(sucursal);
    }
    else {
        res.status(404).send('Sucursal no encontrada');
    }
};
exports.getSucursal = getSucursal;
