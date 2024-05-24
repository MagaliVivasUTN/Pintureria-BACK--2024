"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sucursal = void 0;
var Sucursal = /** @class */ (function () {
    function Sucursal(id, direccion, telefono) {
        this.productos = [];
        this.id = id;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    return Sucursal;
}());
exports.Sucursal = Sucursal;
