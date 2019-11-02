const mongoose= require('mongoose');
const Schema = mongoose.schema;


const SugerenciaSchema = new Schema({
    id:{type:Number,require:true,unique:true},
    comentario:{type:String,require:true,unique:true}
})


mongoose.model('Sugerencia',SugerenciaSchema);