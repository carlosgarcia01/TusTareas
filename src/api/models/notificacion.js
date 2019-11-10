const mongoose= require('mongoose');
const Schema = mongoose.Schema;



const NotificacionSchema = new Schema({
    id:{type:Number,require:true,unique:true},
    mensaje:{type:String,require:true,unique:true}
    
});


module.exports =mongoose.model('Notificacion',NotificacionSchema);


