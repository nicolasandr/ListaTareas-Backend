
import { Router } from 'express';
import {borrarrTarea, crearTarea, editarTarea, listarTarea, obtenerTarea } from '../controllers/Tareas.controller';
const router = Router();
//rutas de los productos
router
.route('/')
.get(listarTarea )
.post(crearTarea);
export default router;

router.route('/tareas/:id')
.get(obtenerTarea).put(editarTarea).delete(borrarrTarea);
