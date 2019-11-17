 const NotificacionService = require('../../services/notificacion.service');
 const Notificacion = require('../models/notificacion')
    module.exports = {
      async getNotificaciones(req, res, next) {
        const notificaciones = await NotificacionService.getAllNotificationes();
 
        return res.status(200).send({ notificaciones });
      },
 
      async getNotificacion(req, res, next) {
        const { id } = req.params;
 
        const notificacion = await NotificacionService.getAnuncioById(id);
 
        return res.status(200).send({ notificacion });
      },

      async postNotificacion(req, res, next) {
        let notificacionRecibida = new Notificacion();
        //notificacionRecibida.id =req.body.id;
        notificacionRecibida.mensaje =req.body.mensaje;
 
        const notificacion_nueva = await NotificacionService.postNotificacion(notificacionRecibida);
 
        return res.status(200).send({ notificacion_nueva});
      }
    };
 