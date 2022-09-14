
import { Router } from 'express';
import { crearProducto, listarProducto, obtenerProducto } from '../controllers/productos.controller';
const router = Router();
//rutas de los productos
router
.route('/')
.get(listarProducto)
.post(crearProducto);
export default router;

router.route('/productos/:id')
.get(obtenerProducto).put().delete();
