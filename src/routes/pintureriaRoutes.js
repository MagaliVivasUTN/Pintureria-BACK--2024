"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var pintureriaController_1 = require("../controllers/pintureriaController");
var router = (0, express_1.Router)();
router.post('/sucursales', pintureriaController_1.createSucursal);
router.get('/sucursales/:id', pintureriaController_1.getSucursal);
exports.default = router;
