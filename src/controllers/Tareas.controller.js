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

export const obtenerTarea = async (req, res) => {
   try {
            //buscamos el id que todavia no tenemos
            console.log(req.params.id) 
        //buscar en la BD la coleccion de productos
        const tareaBuscada = await Tarea.findById(req.params.id);
        //enviar la respuesta
        res.status(200).json(tareaBuscada);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error al buscar los productos'
        })
    }
};

export const editarTarea = (req, res) => {
    res.send('aqui editamos la tarea');
};
export const borrarrTarea = async (req, res) => {
   try {
       //buscar la tarea por el id en la collection de productos de la BD y luego borrar
      await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'La tarea fue eliminada correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'error al intentar buscar la tarea',
        });
   }
};
