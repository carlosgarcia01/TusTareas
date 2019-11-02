const mongoose= require('mongoose');
const Schema = mongoose.schema;


const CalificacionSchema = new Schema({
    id:{type:Number,require:true,unique:true},
    puntaje:{type:Number,require:true},
    comentario:{type:String,require:true}
})


mongoose.model('Calificacion',CalificacionSchema);