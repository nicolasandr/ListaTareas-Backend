import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import './src/database';
import router from './src/routes/tareas.routes';
//instancia de express
const app = express();

//queremos tomar el puerto de la pc
app.set('port', process.env.PORT || 4000);

//quiero que mi backend escuche el puerto
app.listen(app.get('port'), () => {
    console.log('Estamos en el puerto ' + app.get('port'));
});
 //middlewares (funciones pequeñas para una actividad puntual)
app.use(morgan('dev'));
app.use(cors('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cargamos archivo estatico
app.use(express.static('./public'));

//rutas
app.use('/api', router);