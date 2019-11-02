const mongoose= require('mongoose');
const Schema = mongoose.schema;
const Usuario=require('./usuario');


const NotificacionSchema = new Schema({
    id:{type:Number,require:true,unique:true},
    mensaje:{type:String,require:true,unique:true}
    
})


mongoose.model('Notificacion',NotificacionSchema);

