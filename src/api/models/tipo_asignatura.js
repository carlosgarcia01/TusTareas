const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const TipoAsignaturaSchema = new Schema({
    id:{type:String,require:true,unique:true},
    nombre_tipo:{type:String,require:true,unique:true}
    
});


module.exports = mongoose.model('TipoAsignatura',TipoAsignaturaSchema);
