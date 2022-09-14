
import { Router } from 'express';

const router = Router();
//rutas de los productos
router
.route('/')
.get((req, res) => {
    res.send('primera peticion get');
});
export default router;

