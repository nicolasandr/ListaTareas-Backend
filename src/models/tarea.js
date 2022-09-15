import mongoose, { Schema } from 'mongoose';
const tareaSchema = new Schema({
    nombreTarea: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
        // unique: true
    },
    detalleTarea: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 200
    }
});

const Tarea = mongoose.model('tarea', tareaSchema);

export default Tarea;