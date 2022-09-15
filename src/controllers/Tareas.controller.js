import Tarea from '../models/tarea';

export const crearTarea = async (req, res) => {
    try {
        console.log(req.body);
        //validacion
        //crear un objeto para guardar en la BD
        const tareaNueva = new Tarea({
            nombreTarea: req.body.nombreTarea,
            detalleTarea: req.body.detalleTarea
        });
        //guardar efectivamente en la BD
        await tareaNueva.save();

        //enviar respuesta al frontend
         res.status(201).json({
             mensaje: 'La tarea fue creada exitosamente'
         });

        //si algo falla tambien enviar una respuesta
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'la Tarea enviada no pudo ser creada'
        });
    }
};

export const listarTarea = async (req, res) => {
     try {
        //buscar en la BD la coleccion de productos
        const listaTareas = await Tarea.find();
        //enviar la respuesta
        res.status(200).json(listaTareas);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error al buscar las tareas'
        })
        
    }
};

export const obtenerTarea = (req, res) => {
    res.send('aqui obtengo la tarea');
};

export const editarTarea = (req, res) => {
    res.send('aqui editamos la tarea');
};
export const borrarrTarea = (req, res) => {
    res.send('aqui borramos la tarea');
};
