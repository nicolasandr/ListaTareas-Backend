import { check } from 'express-validator';
import resultadosValidacion from './resultadoValidacion';

const validarTarea = [
    check('nombreTarea')
        .notEmpty()
        .withMessage('El nombre de la tarea es obligatorio')
        .isLength({ min: 2 })
        .withMessage('El nombre de la tarea debe contener al menos 2 letras'),
    (req, res, next) => {
        resultadosValidacion(req, res, next);
    },
];
export default validarTarea;
