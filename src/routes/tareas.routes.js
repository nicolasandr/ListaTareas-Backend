
import { Router } from 'express';
import { check } from 'express-validator';
import {borrarrTarea, crearTarea, editarTarea, listarTarea, obtenerTarea } from '../controllers/Tareas.controller';
const router = Router();
//rutas de los productos
router
.route('/tareas')
.get(listarTarea)
.post([check('nombreTarea','El nombre de la tarea es obligatorio').notEmpty(),
check('nombreTarea','La tarea debe tener entre 2 y 20 caracteres').isLength({min:2,max:20})],crearTarea)

router.route('/tareas/:id')
.get(obtenerTarea).put(editarTarea).delete(borrarrTarea);

export default router;