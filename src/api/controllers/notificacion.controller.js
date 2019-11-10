 const NotificacionService = require('../../services/notificacion.service');
 
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
    };
 