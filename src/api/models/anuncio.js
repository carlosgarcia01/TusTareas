const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const Asignatura = require('./asignatura');

const AnuncioSchema = new Schema({
    id:{type:Number,require:true,unique:true},
    título_anuncio:{type:String,require:true,unique:false},
    descripción:{type:String,require:true,unique:false},
    tarifa_hora:{type:Number,require:true,unique:false},
    tipo_asignatura:{type:Schema.Types.ObjectId, ref:Asignatura, require:true} 
});


module.exports= mongoose.model('Anuncio',AnuncioSchema);

