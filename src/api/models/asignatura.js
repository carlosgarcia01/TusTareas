const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const TipoAsignatura = require('./tipo_asignatura');

const AsignaturaSchema = new Schema({
    codigo:{type:String,require:true,unique:true},
    nombre:{type:String,require:true,unique:true},
    tipo_asignatura:{type:Schema.Types.ObjectId, ref: TipoAsignatura, require:true} 
});


module.exports=mongoose.model('Asignatura',AsignaturaSchema);
