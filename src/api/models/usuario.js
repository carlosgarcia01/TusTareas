const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const Asignatura = require('./asignatura');
const Calificacion=require('./calificacion');
const Anuncio=require('./anuncio');
const Notificacion=require('./notificacion');

const UsuarioSchema = new Schema({
    identificación:{type:Number,require:true,unique:true},
    nombre:{type:Number,require:true},
    apellidos:{type:Number,require:true},
    contacto:{type:Number,require:true,unique:true},
    ocupacion:{type:Number,require:true},
    correo:{type:Number,require:true,unique:true},
    contrasena:{type:Number,require:true},
    calificacion:{type:Schema.Types.ObjectId, ref:Asignatura, require:false}, 
    notificacion:{type:Schema.Types.ObjectId, ref:Notificacion, require:false}, 
    anuncio:{type:Schema.Types.ObjectId, ref:Anuncio, require:true} 
});

module.exports=mongoose.model('Usuario',UsuarioSchema);

