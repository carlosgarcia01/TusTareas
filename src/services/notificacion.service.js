'use strict'
const mongoose=require('mongoose');
const Notificacion= require('../api/models/notificacion');


module.exports={
    async getAllNotificationes(){

        const notificaciones = await Notificacion.find();
        return notificaciones;

    },
    async getNotificationById(id){

        const notificacion = await Notificacion.findById(id);
        return notificacion;
    },
    async postNotificacion(notificacionreq) {
      const notificacionAlmacenado = await notificacionreq.save();
 
      return notificacionAlmacenado;
    },

} 