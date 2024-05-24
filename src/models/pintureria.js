"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pintureria = void 0;
var sucursal_1 = require("./sucursal");
var Pintureria = /** @class */ (function () {
    function Pintureria(nombre) {
        this.sucursales = [];
        this.nombre = nombre;
    }
    Pintureria.prototype.createSucursal = function (direccion, telefono) {
        var id = this.sucursales.length + 1;
        var sucursal = new sucursal_1.Sucursal(id, direccion, telefono);
        this.sucursales.push(sucursal);
        return sucursal;
    };
    Pintureria.prototype.showSucursal = function (id) {
        var sucursal = this.sucursales.find(function (s) { return s.id === id; });
        if (sucursal) {
            console.log(sucursal);
            return sucursal;
        }
        else {
            console.error("No se encontró la sucursal solicitada");
            return null;
        }
    };
    Pintureria.prototype.searchSucursal = function (id) {
        var sucursal = this.sucursales.find(function (s) { return s.id === id; });
        if (sucursal) {
            return sucursal;
        }
        else {
            console.error("No se encontró la sucursal solicitada");
            return null;
        }
    };
    Pintureria.prototype.delSucursal = function (id) {
        var index = this.sucursales.findIndex(function (s) { return s.id === id; });
        if (index !== -1) {
            this.sucursales.splice(index, 1);
            console.log("Sucursal eliminada con éxito");
            return true;
        }
        else {
            console.error("Sucursal no encontrada");
            return false;
        }
    };
    Pintureria.prototype.updateSucursal = function (id, direccion, telefono) {
        var sucursal = this.searchSucursal(id);
        if (sucursal) {
            sucursal.direccion = direccion;
            sucursal.telefono = telefono;
            return true;
        }
        else {
            console.error("Sucursal no encontrada");
            return false;
        }
    };
    return Pintureria;
}());
exports.Pintureria = Pintureria;
