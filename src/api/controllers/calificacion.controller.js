const CalificacionService = require('../../services/calificacion.service');
 
    module.exports = {
      async getCalificaciones(req, res, next) {
        const calificaciones = await CalificacionService.getAllCalificationes();
 
        return res.status(200).send({ calificaciones });
      },
 
      async getCalificacion(req, res, next) {
        const { id } = req.params;
 
        const calificacion = await CalificacionService.getCalificacionById(id);
 
        return res.status(200).send({ calificacion });
      },
    };

 