import { Router } from 'express';
import { createSucursal, getSucursal } from '../controllers/pintureriaController';

const router = Router();

router.post('/sucursales', createSucursal);
router.get('/sucursales/:id', getSucursal);



export default router;
