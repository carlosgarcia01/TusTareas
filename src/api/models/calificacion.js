const mongoose= require('mongoose');
const Schema = mongoose.Schema;


const CalificacionSchema = new Schema({
    id:{type:Number,require:true,unique:true},
    puntaje:{type:Number,require:true},
    comentario:{type:String,require:true}
});


module.exports=mongoose.model('Calificacion',CalificacionSchema);