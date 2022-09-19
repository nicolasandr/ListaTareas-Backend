import { Router } from 'express';
import {
    borrarrTarea,
    crearTarea,
    editarTarea,
    listarTarea,
    obtenerTarea,
} from '../controllers/Tareas.controller';
import validarTarea from '../helpers/validacionTarea';
const router = Router();
//rutas de los productos
router.route('/tareas').get(listarTarea).post(validarTarea, crearTarea);

router
    .route('/tareas/:id')
    .get(obtenerTarea)
    .put(validarTarea, editarTarea)
    .delete(borrarrTarea);

export default router;
