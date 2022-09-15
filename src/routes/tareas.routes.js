
import { Router } from 'express';
import {borrarrTarea, crearTarea, editarTarea, listarTarea, obtenerTarea } from '../controllers/Tareas.controller';
const router = Router();
//rutas de los productos
router
.route('/tareas')
.get(listarTarea)
.post(crearTarea)

router.route('/tareas/:id')
.get(obtenerTarea).put(editarTarea).delete(borrarrTarea);

export default router;