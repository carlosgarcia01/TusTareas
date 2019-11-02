const mongoose= require('mongoose');
const Schema = mongoose.schema;


const TipoAsignaturaSchema = new Schema({
    id:{type:String,require:true,unique:true},
    nombre_tipo:{type:String,require:true,unique:true}
    
})


mongoose.model('TipoAsignatura',TipoAsignaturaSchema);
