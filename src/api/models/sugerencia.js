const mongoose= require('mongoose');
const Schema = mongoose.Schema;


const SugerenciaSchema = new Schema({
    id:{type:Number,require:true,unique:true},
    comentario:{type:String,require:true,unique:true}
});


module.exports=mongoose.model('Sugerencia',SugerenciaSchema);